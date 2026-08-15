import type { Locale } from "./i18n/config";
import { showPlaceholders } from "./placeholders";

/**
 * Articles.
 *
 * This is the section that actually moves competitive rankings: on-page tags
 * cannot manufacture authority, published expertise can. It is also what AI
 * assistants quote when someone asks them to recommend an agency.
 *
 * ⚠️ TODO(user): every entry below is a COMMISSIONED OUTLINE, not an article.
 * `body` is empty and `published` is false, so none of them are live, none are
 * in the sitemap, and none are linked. They are here so the topic list, the
 * routing, the schema and the internal linking are all ready the moment you
 * write one.
 *
 * To publish one: write `body` as paragraphs, fill `published: true`, set
 * `date` to the real publication date, and set `author` to a real person's
 * name. Do not publish under a name that is not a real person; author identity
 * is an E-E-A-T signal and a false one is worse than none.
 *
 * Articles are deliberately NOT in the i18n dictionaries: dictionary entries
 * must exist in all three languages (the Dict type enforces it), whereas an
 * article legitimately gets written in English first and translated later. An
 * article simply does not appear in a locale it has no translation for.
 */
export type ArticleBody = {
  title: string;
  /** One-sentence summary, used for the card, the meta description and schema. */
  standfirst: string;
  /** Paragraphs. Empty means unwritten. */
  body: string[];
};

export type Article = {
  slug: string;
  /** false until it is actually written. Unpublished never renders in production. */
  published: boolean;
  /** ISO date, e.g. "2026-09-01". Empty until published. */
  date: string;
  /** Real person's name. Empty until a real author is attached. */
  author: string;
  /** Why this topic was chosen, for the user. Never rendered. */
  rationale: string;
  /** Per-locale content. A missing locale means "not translated yet". */
  t: Partial<Record<Locale, ArticleBody>>;
};

const draft = (
  slug: string,
  title: string,
  standfirst: string,
  rationale: string
): Article => ({
  slug,
  published: false,
  date: "",
  author: "",
  rationale,
  t: { en: { title, standfirst, body: [] } },
});

export const ARTICLES: Article[] = [
  draft(
    "what-right-to-left-actually-means",
    "What right-to-left actually means for software, not just CSS",
    "Mirroring a layout is the easy part. The hard part is everything that does not mirror: numbers, dates, charts, and the logic underneath them.",
    "Near-zero competition and squarely your expertise. Best single piece to rank for RTL terms."
  ),
  draft(
    "software-that-does-not-feel-translated",
    "Building software that does not feel translated",
    "Why most multilingual products read as an afterthought in their second language, and what it takes to avoid it.",
    "Direct hit on 'multilingual app development', the highest-intent term you can realistically win."
  ),
  draft(
    "running-our-own-product",
    "What running our own school platform taught us about support",
    "Kampus is in daily use in real schools. Being the ones who answer the phone when it breaks changed how we build everything else.",
    "First-hand experience no competitor can copy. Strongest E-E-A-T piece on the list."
  ),
  draft(
    "choosing-a-software-house-in-london",
    "Choosing a software house in London for a multilingual market",
    "What to ask an agency before you hire them, especially if your customers do not all read English.",
    "Combines your location with commercial intent. Supports the local SEO work."
  ),
  draft(
    "erp-vs-spreadsheets",
    "ERP or spreadsheets: when a growing business actually needs one",
    "Most businesses move too late, and some move too early. Here is the honest threshold.",
    "Commercial-intent 'ERP development' keyword, framed as advice rather than a pitch."
  ),
  draft(
    "why-arabic-chatbots-fail",
    "Why most Arabic chatbots fail, and what actually works",
    "Dialect, script direction, and politeness registers break assistants that were only ever tested in English.",
    "Pairs 'AI chatbot development' with your differentiator. Very little competition."
  ),
  draft(
    "five-systems-schools-juggle",
    "The five systems multi-campus schools usually juggle",
    "Attendance here, fees there, payroll somewhere else, and the same number entered three times.",
    "Buyer-intent piece that feeds directly into the Kampus case study."
  ),
  draft(
    "arabic-and-urdu-web-typography",
    "Arabic and Urdu web typography: what most sites get wrong",
    "Line height, numeral systems, and why the default font stack quietly makes your business look careless.",
    "Linkbait for a technical audience. The kind of piece other developers cite."
  ),
  draft(
    "n8n-vs-custom-automation",
    "n8n or custom automation: when the off-the-shelf tool is enough",
    "Automation you can buy, automation you have to build, and how to tell which problem you have.",
    "Targets 'n8n automation' with a genuinely useful answer rather than a sales page."
  ),
  draft(
    "crm-and-pos-for-multilingual-customers",
    "CRM and POS for businesses serving Arabic and Urdu speaking customers",
    "What changes in a till system and a customer record when your customers do not all read left to right.",
    "Combines two core service keywords with the differentiator."
  ),
];

/** Articles live enough to show, in the given locale. */
export function visibleArticles(locale: Locale): Article[] {
  const written = ARTICLES.filter((a) => !!a.t[locale]);
  if (showPlaceholders()) return written;
  return written.filter((a) => a.published && a.t[locale]!.body.length > 0);
}

export function findArticle(slug: string, locale: Locale): Article | undefined {
  return visibleArticles(locale).find((a) => a.slug === slug);
}

/** True once there is anything worth linking to from the nav and sitemap. */
export function hasPublishedArticles(locale: Locale): boolean {
  return ARTICLES.some(
    (a) => a.published && (a.t[locale]?.body.length ?? 0) > 0
  );
}
