"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export const config = {
  matcher: "/",
};

export function middleware(request: NextRequest) {
  const sessionActive = cookies().get("session");
  // Call our authentication function to check the request
  if (!sessionActive) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
