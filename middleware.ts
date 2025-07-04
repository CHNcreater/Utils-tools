import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((key, value) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales.slice()
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (["/manifest.json", "/favicon.ico", "/next.svg"].includes(pathname))
    return;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  const pathnameHasDuplicateLocale = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}/${locale}`)
  );

  if (pathnameHasDuplicateLocale) {
    const locale = pathname.split("/")[1];
    const correctedPath = pathname.replace(
      `/${locale}/${locale}`,
      `/${locale}`
    );
    return NextResponse.redirect(new URL(correctedPath, request.url));
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
