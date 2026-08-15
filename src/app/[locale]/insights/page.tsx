import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { hasPublishedArticles, visibleArticles } from "@/lib/insights";
import PageIntro from "../../components/PageIntro";
import BreadcrumbLd from "../../components/BreadcrumbLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.insights.title,
    description: dict.meta.insights.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/insights")),
      languages: {
        en: absoluteUrl(localeHref("en", "/insights")),
        ur: absoluteUrl(localeHref("ur", "/insights")),
        ar: absoluteUrl(localeHref("ar", "/insights")),
        "x-default": absoluteUrl(localeHref("en", "/insights")),
      },
    },
    // An index with nothing in it is a thin page. Keep it out of the index
    // until it actually lists something, same rule as /testimonials.
    ...(hasPublishedArticles(locale)
      ? {}
      : { robots: { index: false, follow: true } }),
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const href = (path: string) => localeHref(locale, path);
  const articles = visibleArticles(locale);
  const i = dict.insights;

  return (
    <main id="main">
      <BreadcrumbLd
        crumbs={[
          { name: dict.footer.home, path: href("/") },
          { name: dict.meta.insights.title, path: href("/insights") },
        ]}
      />
      <PageIntro eyebrow={i.intro.eyebrow} h={i.intro.h} sub={i.intro.sub} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="sr-only">{i.intro.eyebrow}</h2>
          {articles.length === 0 ? (
            <p className="cases__note">{i.empty}</p>
          ) : (
            <ul className="posts">
              {articles.map((a) => {
                const t = a.t[locale]!;
                return (
                  <li className="post reveal" key={a.slug}>
                    <Link href={href(`/insights/${a.slug}`)}>
                      {a.date && (
                        <time className="post__date" dateTime={a.date}>
                          {a.date}
                        </time>
                      )}
                      <h3>{t.title}</h3>
                      <p>{t.standfirst}</p>
                      <span className="post__cta">
                        {i.readMore}{" "}
                        <ArrowRight className="icon-flip" size={14} weight="bold" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
