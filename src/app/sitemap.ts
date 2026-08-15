import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { LOCALES, localeHref } from "@/lib/i18n/config";
import { hasRealTestimonials } from "@/lib/testimonials";
import { ARTICLES, hasPublishedArticles } from "@/lib/insights";

const BASE_PATHS = [
  "/",
  "/services",
  "/industries",
  "/work",
  "/work/kampus",
  "/pricing",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // /testimonials is still all unreplaced demo quotes - keep it out of the
  // sitemap (matching its noindex) until real, permissioned quotes land.
  const PATHS = hasRealTestimonials()
    ? [...BASE_PATHS, "/testimonials"]
    : BASE_PATHS;

  // The insights index and any written article. Unwritten outlines are not
  // listed: submitting URLs that render an empty page wastes crawl budget and
  // teaches Google the section is thin.
  if (hasPublishedArticles("en")) {
    PATHS.push("/insights");
    for (const a of ARTICLES) {
      if (a.published && (a.t.en?.body.length ?? 0) > 0) {
        PATHS.push(`/insights/${a.slug}`);
      }
    }
  }

  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(localeHref(locale, path)),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(
            LOCALES.map((l) => [l, absoluteUrl(localeHref(l, path))])
          ),
          // Matches the x-default already emitted in each page's <head>; the
          // sitemap previously omitted it, so the two disagreed.
          "x-default": absoluteUrl(localeHref("en", path)),
        },
      },
    }))
  );
}
