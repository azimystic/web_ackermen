import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
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
    title: dict.meta.industries.title,
    description: dict.meta.industries.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/industries")),
      languages: {
        en: absoluteUrl(localeHref("en", "/industries")),
        ur: absoluteUrl(localeHref("ur", "/industries")),
        ar: absoluteUrl(localeHref("ar", "/industries")),
        "x-default": absoluteUrl(localeHref("en", "/industries")),
      },
    },
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const ind = dict.industries;
  const href = (path: string) => localeHref(locale, path);

  return (
    <main id="main">
      <BreadcrumbLd
        crumbs={[
          { name: dict.footer.home, path: href("/") },
          { name: dict.meta.industries.title, path: href("/industries") },
        ]}
      />
      <PageIntro eyebrow={ind.intro.eyebrow} h={ind.intro.h} sub={ind.intro.sub} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="sr-only">{ind.intro.eyebrow}</h2>
          <div className="inds">
            {/* Index-based ids, not slugified names: the names are translated,
                so a name-derived anchor would differ per locale and break the
                nav's deep links on /ur and /ar. Item order is identical in
                every dictionary, enforced by the Dict type. */}
            {ind.items.map((item, i) => (
              <article className="ind reveal" id={`ind-${i}`} key={item.name}>
                <span className="ind__who">{item.who}</span>
                <h3>{item.name}</h3>
                <p className="ind__pain">{item.pain}</p>
                {/* The fix is the reward for hovering, so the grid stays scannable. */}
                <p className="ind__fix">{item.fix}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta__panel reveal">
            <h2>
              {ind.cta.h.pre}
              <mark>{ind.cta.h.mark}</mark>
              {ind.cta.h.post}
            </h2>
            <p>{ind.cta.sub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary" href={href("/contact")}>
                {ind.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
