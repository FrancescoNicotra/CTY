import { NextResponse, NextRequest } from "next/server";
import User from "@/lib/user/user";

async function POST(req: Request) {
  if (req.method === "POST") {
    const data = await req.json();
    const email = data.email;
    const profileImgUrl = data.profilelUrl;
    const user = new User(email);
    try {
      await user.addProfilePic(profileImgUrl, email);
      return NextResponse.redirect(new URL("/home", req.url));
    } catch (error: any) {
      return NextResponse.json({ error: error.message });
    }
  }
}

export { POST };
