import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["en", "de", "it"];
export const localesLabels = [
  { label: "English", value: "en" },
  // { label: "Master", value: "ww" },
  { label: "Deutsch", value: "de" },
  { label: "Italiano", value: "it" },
];
export const defaultLocale = "en";

function getLocale(request: NextRequest) {
  const locale = request.nextUrl.pathname
    .split("/")
    .filter((route: string) => !!route)?.[0];
  const currentLocale = locales.find((item: string) => item === locale);

  return currentLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const currentLocale = getLocale(request);

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  /**
   * Redirect if default locale
   */
  if (currentLocale === defaultLocale) {
    return NextResponse.redirect(request.nextUrl.origin);
  }

  /**
   * Rewrite locales
   */

  switch (currentLocale) {
    case "en":
      if (currentLocale === defaultLocale) {
        const url = `${request.nextUrl.origin}/404`;
        return NextResponse.rewrite(new URL(url));
      }
  }

  /**
   * If there is no locale
   * use em-ww as default locale
   * without adding it to the url path
   */
  if (pathnameHasLocale) return;
  if (!pathnameHasLocale) {
    const url = `${request.nextUrl.origin}/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(new URL(url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|gaScript.js|gaScript2.js|sitemap.xml|en/sitemap.xml|robots.txt|robots1.txt|robots2.txt|google05c416d5e5fbc28c.html).*)",
  ],
};
