import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { LOCALES, localeHref } from "@/lib/i18n/config";

const PATHS = [
  "/",
  "/services",
  "/industries",
  "/work",
  "/work/kampus",
  "/pricing",
  "/testimonials",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(localeHref(locale, path)),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, absoluteUrl(localeHref(l, path))])
        ),
      },
    }))
  );
}
