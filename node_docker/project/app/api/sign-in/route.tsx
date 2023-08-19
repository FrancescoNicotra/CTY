import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import User from "@/lib/user/user";
import GenerateRandomNumbers from "@/utils/generateRandomNumbers/GenerateRandomNumbers";
import { GenerateJwtToken } from "@/lib/generate_JWT/generator";

async function POST(req: Request, res: Response) {
  const data = await req.json();
  const email = data.email;
  const password = data.password;
  const user = new User(email);

  const name = await user.getName(email);
  const noSpaceName = name?.replace(/\s/g, "");

  if (name !== null || name !== undefined) {
    console.log("user exists");
  }

  const sessionNumber: string = GenerateRandomNumbers();
  const userData = {
    session: sessionNumber,
    email: email,
    name: name,
    role: "user",
  };

  const token = GenerateJwtToken(userData);

  if (await user.read(email)) {
    if (await user.checkPassword(email, password)) {
      cookies().set({
        name: "session",
        value: token,
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
        path: "/",
        sameSite: "strict",
      });
      return NextResponse.redirect(new URL(`/home/${noSpaceName}`, req.url));
    } else {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
}

export { POST };
