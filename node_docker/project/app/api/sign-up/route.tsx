import User from "@/lib/user/user";
import { NextResponse } from "next/server";

async function POST(req: Request, res: Response) {
  const data = await req.json();
  const name = data.name;
  const email = data.email;
  const password = data.password;
  const user = new User(email, password);
  if (await user.create(name, email, password)) {
    return NextResponse.redirect(new URL("/home", req.url));
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export { POST };
