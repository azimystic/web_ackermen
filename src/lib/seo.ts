export const SITE = {
  name: "Ackerman",
  shortName: "Ackerman",
  /**
   * The brand is spelled "Ackerman" but the domain is ackermen.com. That gap
   * costs search traffic in both directions, so every spelling the business
   * is actually reached by is declared as an alternateName on the
   * Organization node, giving Google one entity instead of three guesses.
   *
   * ⚠️ TODO(user): if ackerman.com is available, buy it and 301 it here. A
   * matching domain is worth more than any tag on this page.
   */
  alternateNames: ["Ackermen", "Ackerman Software", "Ackerman Software House"],
  domain: "ackermen.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ackermen.com",
  locale: "en_GB",
  // TODO(user): confirm social handles.
  twitter: "",
  // TODO(user): confirm the official contact email (hello@ackermen.com?).
  email: "hello@ackermen.com",
  description:
    "Ackerman is a software house building ERP, CRM, CMS, and POS systems, AI solutions (chatbots, n8n automation, data analysis) and multi-language web and mobile apps with full RTL support.",
  tagline:
    "Software that speaks every language your business does. ERP, CRM, AI solutions, and multilingual apps, built end to end.",
  keywords: [
    "software house",
    "software agency",
    "ERP development",
    "CRM development",
    "CMS development",
    "POS system development",
    "AI chatbot development",
    "n8n automation",
    "workflow automation",
    "data analysis",
    "multilingual app development",
    "RTL web development",
    "Ackerman",
  ],
  socials: {
    // TODO(user): supply real profile URLs; empty strings are filtered out.
    twitter: "",
    linkedin: "",
    github: "",
    facebook: "",
    instagram: "",
  },
  organization: {
    legalName: "Ackerman",
    // TODO(user): confirm founding date. Once set, it renders as foundingDate
    // and is a real credibility signal for a young agency.
    foundingDate: "",
    areaServed: "Worldwide",
  },
  /**
   * Business location. City-level only, deliberately: a street address is
   * published here ONLY if the user confirms one, because a wrong or invented
   * address is worse than none (it poisons the Google Business Profile and
   * every citation built on top of it).
   *
   * ⚠️ TODO(user): add `streetAddress`, `postalCode` and `telephone` once
   * confirmed. Those three unlock a Google Business Profile, which is the
   * single most winnable ranking surface for "software house London".
   */
  place: {
    locality: "London",
    region: "England",
    country: "GB",
    countryName: "United Kingdom",
    streetAddress: "",
    postalCode: "",
    telephone: "",
  },
} as const;

/**
 * Compose a page title as "{content} | Ackerman" - content first, brand name
 * last, always. This order is bidi-safe: embedding the English brand name
 * at the FRONT of a predominantly right-to-left (Urdu/Arabic) string causes
 * the bidi algorithm to reorder it unpredictably in link previews. Keeping
 * the brand as the trailing token, with nothing after it, avoids that.
 */
export function pageTitle(content: string) {
  return `${content} | ${SITE.name}`;
}

export function absoluteUrl(path: string) {
  const base = SITE.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
