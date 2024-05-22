import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  if (pathName.startsWith("/dashboard")) {
    const token = req.cookies.get("access_token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
