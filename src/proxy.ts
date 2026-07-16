import { NextResponse, type NextRequest } from "next/server";

import {
  detectLocale,
  isLocale,
  LOCALE_COOKIE,
} from "./lib/i18n/config";

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/seo/") ||
    pathname === "/favicon.ico" ||
    /\/[^/]+\.[^/]+$/.test(pathname)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isPublicAsset(pathname) || isLocale(firstSegment)) {
    return undefined;
  }

  const locale = detectLocale({
    cookie: request.cookies.get(LOCALE_COOKIE)?.value,
    country: request.headers.get("x-vercel-ip-country") ?? undefined,
    acceptLanguage: request.headers.get("accept-language") ?? undefined,
  });

  const destination = request.nextUrl.clone();
  destination.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(destination);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|seo|images|.*\\..*).*)",
  ],
};
