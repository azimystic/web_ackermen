import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import {
  DEFAULT_LOCALE,
  LOCALES,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { SITE, absoluteUrl } from "@/lib/seo";
import { findArticle, visibleArticles } from "@/lib/insights";
import BreadcrumbLd from "../../../components/BreadcrumbLd";

/**
 * Uses the same visibility rule as the page itself. Without this, a
 * production build prerenders a 404 for every unwritten outline.
 */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    visibleArticles(locale).map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const article = findArticle(slug, locale);
  if (!article) return {};
  const t = article.t[locale]!;

  const path = `/insights/${slug}`;
  return {
    title: t.title,
    description: t.standfirst,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, path)),
      // Only languages this article exists in. Declaring an alternate that
      // 404s invalidates the whole hreflang set.
      languages: Object.fromEntries(
        LOCALES.filter((l) => article.t[l]).map((l) => [
          l,
          absoluteUrl(localeHref(l, path)),
        ])
      ),
    },
    openGraph: {
      type: "article",
      title: t.title,
      description: t.standfirst,
      ...(article.date ? { publishedTime: article.date } : {}),
    },
    ...(article.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const article = findArticle(slug, locale);
  if (!article) notFound();

  const dict = getDict(locale);
  const t = article.t[locale]!;
  const href = (path: string) => localeHref(locale, path);
  const i = dict.insights;

  /**
   * Article schema. `author` is omitted rather than faked when no real person
   * is attached: a fabricated byline is a worse E-E-A-T signal than none.
   */
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.standfirst,
    inLanguage: locale,
    mainEntityOfPage: absoluteUrl(localeHref(locale, `/insights/${slug}`)),
    ...(article.date
      ? { datePublished: article.date, dateModified: article.date }
      : {}),
    ...(article.author
      ? { author: { "@type": "Person", name: article.author } }
      : {}),
    publisher: { "@id": `${SITE.url}#organization` },
  };

  return (
    <main id="main">
      <BreadcrumbLd
        crumbs={[
          { name: dict.footer.home, path: href("/") },
          { name: dict.meta.insights.title, path: href("/insights") },
          { name: t.title, path: href(`/insights/${slug}`) },
        ]}
      />
      {article.published && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      )}

      <header className="pintro grid-field">
        <div className="wrap">
          <Link className="post__back" href={href("/insights")}>
            <ArrowLeft className="icon-flip" size={14} weight="bold" /> {i.back}
          </Link>
          <h1>{t.title}</h1>
          <p className="pintro__sub">{t.standfirst}</p>
          <div className="post__meta">
            {article.date && <time dateTime={article.date}>{article.date}</time>}
            {article.author && (
              <span>
                {i.by} {article.author}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose">
            {t.body.map((p, n) => (
              <p key={n}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
