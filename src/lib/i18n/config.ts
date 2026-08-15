export const LOCALES = ["en", "ur", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const RTL_LOCALES: Locale[] = ["ur", "ar"];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  ur: "اردو",
  ar: "العربية",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  ur: "ur",
  ar: "ar",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ur: "ur_PK",
  ar: "ar_AE",
};

/** Countries where the site should default to Arabic. */
export const ARABIC_COUNTRIES = [
  "AE", "SA", "QA", "KW", "BH", "OM", "EG", "JO", "IQ", "LB",
  "LY", "MA", "DZ", "TN", "SY", "YE", "SD", "PS", "MR", "SO", "DJ", "KM",
];

/** Countries where the site should default to Urdu. */
export const URDU_COUNTRIES = ["PK"];

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function dirFor(locale: Locale): "ltr" | "rtl" {
  return isRtl(locale) ? "rtl" : "ltr";
}

/**
 * Build a locale-aware href. English lives at the bare path (rewritten
 * internally by proxy.ts); Urdu and Arabic are prefixed.
 */
export function localeHref(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return p === "/" ? "/" : p;
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

/** Pick the locale a visitor should get, from country + Accept-Language. */
export function detectLocale(
  country: string | null,
  acceptLanguage: string | null
): Locale {
  if (country) {
    const c = country.toUpperCase();
    if (ARABIC_COUNTRIES.includes(c)) return "ar";
    if (URDU_COUNTRIES.includes(c)) return "ur";
  }
  if (acceptLanguage) {
    const langs = acceptLanguage.toLowerCase();
    // First language wins if it is one of ours.
    const first = langs.split(",")[0]?.trim() || "";
    if (first.startsWith("ar")) return "ar";
    if (first.startsWith("ur")) return "ur";
  }
  return DEFAULT_LOCALE;
}
