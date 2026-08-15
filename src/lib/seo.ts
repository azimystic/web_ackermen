export const SITE = {
  name: "Ackerman",
  shortName: "Ackerman",
  // TODO(user): confirm the real domain - placeholder until then.
  domain: "ackerman.example",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ackerman.example",
  locale: "en_US",
  // TODO(user): confirm social handles.
  twitter: "",
  // TODO(user): confirm the official contact email.
  email: "hello@ackerman.example",
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
    // TODO(user): confirm founding date.
    foundingDate: "",
    areaServed: "Worldwide",
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
