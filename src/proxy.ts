import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  detectLocale,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";

const LOCALE_COOKIE = "ack_locale";
const COUNTRY_COOKIE = "ack_country";
const ONE_YEAR = 60 * 60 * 24 * 365;

function countryFrom(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    null
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const country = countryFrom(request);
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const hasCountryCookie = request.cookies.has(COUNTRY_COOKIE);

  const attach = (res: NextResponse) => {
    if (country && !hasCountryCookie) {
      res.cookies.set(COUNTRY_COOKIE, country.toUpperCase(), {
        maxAge: ONE_YEAR,
        path: "/",
        sameSite: "lax",
      });
    }
    return res;
  };

  // Path already carries a non-default locale prefix (/ur, /ar).
  const seg = pathname.split("/")[1];
  if (isLocale(seg) && seg !== DEFAULT_LOCALE) {
    // Remember the explicit choice so future bare visits keep it.
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, seg, { maxAge: ONE_YEAR, path: "/", sameSite: "lax" });
    return attach(res);
  }

  // A bare /en/... path canonicalizes to the unprefixed URL.
  if (seg === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const res = NextResponse.redirect(url, 308);
    res.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, { maxAge: ONE_YEAR, path: "/", sameSite: "lax" });
    return attach(res);
  }

  // Unprefixed path: decide the visitor's locale.
  let target: Locale;
  if (isLocale(cookieLocale)) {
    target = cookieLocale;
  } else {
    target = detectLocale(country, request.headers.get("accept-language"));
  }

  if (target !== DEFAULT_LOCALE) {
    // First visit from an Arabic/Urdu locale: send them to their language.
    const url = request.nextUrl.clone();
    url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
    const res = NextResponse.redirect(url, 307);
    res.cookies.set(LOCALE_COOKIE, target, { maxAge: ONE_YEAR, path: "/", sameSite: "lax" });
    return attach(res);
  }

  // English: keep the clean URL, rewrite internally to /en/...
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return attach(NextResponse.rewrite(url));
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
