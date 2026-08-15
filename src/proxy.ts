import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";

const LOCALE_COOKIE = "ack_locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Locale routing.
 *
 * English is always the default. We deliberately do NOT sniff geo headers or
 * Accept-Language: a visitor browsing from Pakistan, or with Urdu high in
 * their browser's language list, still lands on the English site. Switching
 * language is the visitor's decision, made through the language switcher (or
 * by opening a /ur or /ar URL directly), and only that explicit choice is
 * remembered.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const seg = pathname.split("/")[1];

  // Explicit /ur or /ar URL: serve it and remember the choice.
  if (isLocale(seg) && seg !== DEFAULT_LOCALE) {
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, seg, {
      maxAge: ONE_YEAR,
      path: "/",
      sameSite: "lax",
    });
    return res;
  }

  // /en/... canonicalizes to the unprefixed URL and pins English.
  if (seg === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const res = NextResponse.redirect(url, 308);
    res.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, {
      maxAge: ONE_YEAR,
      path: "/",
      sameSite: "lax",
    });
    return res;
  }

  // Unprefixed path. Honour a previously chosen language, otherwise English.
  const chosen = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(chosen) && chosen !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${chosen}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 307);
  }

  // English: keep the clean URL, rewrite internally to /en/...
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Run on all paths except _next internals, metadata files, and
     * public static assets.
     */
    "/((?!_next|api|logo\\.svg|icon\\.svg|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|opengraph-image|twitter-image|.*\\.(?:jpg|jpeg|png|gif|webp|svg|ico|css|js|txt|xml|webmanifest)).*)",
  ],
};

export default proxy;
