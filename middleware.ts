import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "ru", "uz"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[\w]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];
  if (locales.includes(pathLocale)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};


