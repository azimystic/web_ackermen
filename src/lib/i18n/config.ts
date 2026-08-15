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

// Note: there is deliberately no locale auto-detection here. English is the
// default for every visitor regardless of country or browser language;
// switching is an explicit user action. See src/proxy.ts.
