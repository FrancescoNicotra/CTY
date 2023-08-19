import { NextRequest, NextResponse } from "next/server";

import { verifyJwtToken } from "@/lib/generate_JWT/generator";

export function middleware(req: NextRequest) {
  // leggi il cookie
  const cookie = req.cookies.get("session");

  // verifica il token
  const token = cookie?.value;

  // reindirizza in base alla validità
  if (!token) {
    return redirectToSignIn(req);
  }

  // se valido, next()
  return NextResponse.next();
}

function redirectToSignIn(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/home/:path*", "/profilo/:path*"],
};
