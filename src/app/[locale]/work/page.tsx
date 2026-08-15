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
import { visibleWork } from "@/lib/work";
import PageIntro from "../../components/PageIntro";
import CaseCover from "../../components/CaseCover";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.work.title,
    description: dict.meta.work.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/work")),
      languages: {
        en: absoluteUrl(localeHref("en", "/work")),
        ur: absoluteUrl(localeHref("ur", "/work")),
        ar: absoluteUrl(localeHref("ar", "/work")),
        "x-default": absoluteUrl(localeHref("en", "/work")),
      },
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const href = (path: string) => localeHref(locale, path);
  const cases = visibleWork();

  return (
    <main id="main">
      <PageIntro
        eyebrow={dict.work.intro.eyebrow}
        h={dict.work.intro.h}
        sub={dict.work.intro.sub}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="sr-only">{dict.work.intro.eyebrow}</h2>
          <div className="cases">
            {cases.map((c, i) => {
              const t = c.t[locale];
              const body = (
                <>
                  <CaseCover
                    tone={c.tone}
                    metric={t.metric}
                    label={t.metricLabel}
                    index={i}
                  />
                  <span className="case-card__meta">{t.sector}</span>
                  <h3>{t.title}</h3>
                  <p>{t.line}</p>
                  {c.real && (
                    <span className="case-card__cta">
                      {dict.work.viewCase}{" "}
                      <ArrowRight className="icon-flip" size={14} weight="bold" />
                    </span>
                  )}
                </>
              );

              return c.real ? (
                <Link
                  className="case-card reveal"
                  href={href(`/work/${c.slug}`)}
                  key={c.slug}
                >
                  {body}
                </Link>
              ) : (
                <article className="case-card reveal" key={c.slug}>
                  {body}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
