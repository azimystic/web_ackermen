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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/about")),
      languages: {
        en: absoluteUrl(localeHref("en", "/about")),
        ur: absoluteUrl(localeHref("ur", "/about")),
        ar: absoluteUrl(localeHref("ar", "/about")),
        "x-default": absoluteUrl(localeHref("en", "/about")),
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const a = dict.about;
  const href = (path: string) => localeHref(locale, path);

  return (
    <main id="main">
      <PageIntro eyebrow={a.intro.eyebrow} h={a.intro.h} sub={a.intro.sub} />

      {/* ---- Principles ---- */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{a.principles.eyebrow}</span>
            <h2 className="sr-only">{a.principles.eyebrow}</h2>
          </div>
          <div className="prin">
            {a.principles.items.map((p, i) => (
              <div className="prin__item reveal" key={p.title}>
                <span className="process__idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Setup ---- */}
      <section className="section grid-field">
        <div className="wrap">
          <div className="case-prose reveal">
            <span className="eyebrow">{a.setup.eyebrow}</span>
            <h2>{a.setup.title}</h2>
            <p>{a.setup.body}</p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta__panel reveal">
            <h2>
              {a.cta.h.pre}
              <mark>{a.cta.h.mark}</mark>
              {a.cta.h.post}
            </h2>
            <p>{a.cta.sub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary" href={href("/contact")}>
                {a.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
