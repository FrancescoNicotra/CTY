import { cookies } from "next/headers";
import { NextResponse } from "next/server";
async function POST(req: Request, res: Response) {
  const cookie = cookies().get("session");
  return NextResponse.json({ status: 200 });
}

export { POST };
