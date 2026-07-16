import { NextResponse, type NextRequest } from "next/server";

import { isLocale, LOCALE_COOKIE } from "../../../lib/i18n/config";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as {
    locale?: string;
  } | null;

  if (!isLocale(body?.locale)) {
    return NextResponse.json({ error: "Unsupported locale" }, { status: 400 });
  }

  const response = new NextResponse(null, { status: 204 });
  response.cookies.set(LOCALE_COOKIE, body.locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
