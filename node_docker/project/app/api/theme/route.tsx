import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function POST(req: Request, res: Response) {
  const cookie = cookies().set("theme", "dark", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
    path: "/",
    sameSite: "strict",
  });
  return NextResponse.json({ status: 200 });
}

export { POST };
