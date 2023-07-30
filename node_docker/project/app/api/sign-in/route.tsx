import User from "@/lib/user/user";
import { NextResponse } from "next/server";

async function POST(req: Request, res: Response) {
  const data = await req.json();

  const email = data.email;
  const password = data.password;
  const user = new User(email, password);
  if (await user.read(email)) {
    if (await user.checkPassword(email, password)) {
      return NextResponse.redirect(new URL("/home", req.url));
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export { POST };
