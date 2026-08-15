import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import PageIntro from "../../components/PageIntro";
import Faq from "../../components/Faq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.pricing.title,
    description: dict.meta.pricing.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/pricing")),
      languages: {
        en: absoluteUrl(localeHref("en", "/pricing")),
        ur: absoluteUrl(localeHref("ur", "/pricing")),
        ar: absoluteUrl(localeHref("ar", "/pricing")),
        "x-default": absoluteUrl(localeHref("en", "/pricing")),
      },
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const p = dict.pricing;
  const href = (path: string) => localeHref(locale, path);

  return (
    <main id="main">
      <PageIntro eyebrow={p.intro.eyebrow} h={p.intro.h} sub={p.intro.sub} />

      {/* ---- Plans ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="sr-only">{p.intro.eyebrow}</h2>
          <div className="plans">
            {p.plans.map((plan) => (
              <article
                className={`plan reveal${plan.featured ? " plan--featured" : ""}`}
                key={plan.name}
              >
                <span className="plan__best">{plan.best}</span>
                <h3>{plan.name}</h3>
                <strong className="plan__price">{plan.price}</strong>
                <span className="plan__note">{plan.note}</span>
                <p className="plan__desc">{plan.desc}</p>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check size={14} weight="bold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="plan__cta">
                  <Link
                    className={`btn ${plan.featured ? "btn--accent" : "btn--ghost"}`}
                    href={href("/contact")}
                  >
                    {plan.cta}
                  </Link>
                </span>
              </article>
            ))}
          </div>
          <p className="pricing-note">{p.note}</p>
        </div>
      </section>

      {/* ---- Pricing FAQ ---- */}
      <section className="section section--tint grid-field">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{p.faq.eyebrow}</span>
            <h2>
              {p.faq.h.pre}
              <mark>{p.faq.h.mark}</mark>
              {p.faq.h.post}
            </h2>
          </div>
          <div className="reveal">
            <Faq items={p.faq.items} />
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section">
        <div className="wrap">
          <div className="cta__panel reveal">
            <h2>
              {p.cta.h.pre}
              <mark>{p.cta.h.mark}</mark>
              {p.cta.h.post}
            </h2>
            <p>{p.cta.sub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary" href={href("/contact")}>
                {p.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
