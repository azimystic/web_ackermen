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
import AnchorRail from "../../components/AnchorRail";
import ServiceLayer from "../../components/ServiceLayer";
import LocaleDemo from "../../components/LocaleDemo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/services")),
      languages: {
        en: absoluteUrl(localeHref("en", "/services")),
        ur: absoluteUrl(localeHref("ur", "/services")),
        ar: absoluteUrl(localeHref("ar", "/services")),
        "x-default": absoluteUrl(localeHref("en", "/services")),
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const s = dict.services;
  const href = (path: string) => localeHref(locale, path);

  const rail = [
    { id: "ai", label: s.rail.ai },
    { id: "web", label: s.rail.web },
    { id: "mobile", label: s.rail.mobile },
    { id: "data", label: s.rail.data },
  ];

  const layers = [
    { id: "ai", data: s.ai, tint: false },
    { id: "web", data: s.web, tint: true },
    { id: "mobile", data: s.mobile, tint: false },
    { id: "data", data: s.data, tint: true },
  ] as const;

  return (
    <main id="main">
      <PageIntro eyebrow={s.intro.eyebrow} h={s.intro.h} sub={s.intro.sub} />

      <AnchorRail items={rail} />

      {layers.map((layer) => (
        <section
          className={`section svc-section${layer.tint ? " section--tint grid-field" : ""}`}
          id={layer.id}
          key={layer.id}
        >
          <div className="wrap">
            <div className="section__head reveal">
              <span className="eyebrow">{layer.data.eyebrow}</span>
              <h2>
                {layer.data.h.pre}
                <mark>{layer.data.h.mark}</mark>
                {layer.data.h.post}
              </h2>
              <p>{layer.data.sub}</p>
            </div>
            <ServiceLayer cards={layer.data.cards} label={layer.data.eyebrow} />
          </div>
        </section>
      ))}

      {/* ---- Multilingual, included throughout ---- */}
      <section className="section grid-field grid-field--ruled">
        <span className="sheet-note sheet-note--tr" aria-hidden="true">
          EN / UR / AR · INCLUDED
        </span>
        <div className="wrap">
          <div className="diff__grid">
            <div className="reveal">
              <span className="eyebrow">{s.multilingual.eyebrow}</span>
              <h2>
                {s.multilingual.h.pre}
                <mark>{s.multilingual.h.mark}</mark>
                {s.multilingual.h.post}
              </h2>
              <p className="diff__sub">{s.multilingual.sub}</p>
              <div className="mirror" style={{ marginTop: "1.75rem" }}>
                <div className="mirror__pane">
                  <span className="anno">English · left to right</span>
                  <div className="mirror__bar mirror__bar--brand" />
                  <div className="mirror__bar mirror__bar--wide" />
                  <div className="mirror__bar mirror__bar--mid" />
                  <div className="mirror__bar mirror__bar--short" />
                </div>
                <div className="mirror__pane mirror__pane--rtl">
                  <span className="anno">اردو / العربية · right to left</span>
                  <div className="mirror__bar mirror__bar--brand" />
                  <div className="mirror__bar mirror__bar--wide" />
                  <div className="mirror__bar mirror__bar--mid" />
                  <div className="mirror__bar mirror__bar--short" />
                </div>
              </div>
            </div>
            <div className="reveal">
              <LocaleDemo
                title={dict.home.difference.demoTitle}
                caption={s.multilingual.demoCaption}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Engagement ---- */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{s.engagement.eyebrow}</span>
            <h2>
              {s.engagement.h.pre}
              <mark>{s.engagement.h.mark}</mark>
              {s.engagement.h.post}
            </h2>
            <p>{s.engagement.sub}</p>
          </div>
          <p className="reveal">
            <Link className="btn btn--ghost" href={href("/pricing")}>
              {s.engagement.cta}
            </Link>
          </p>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section">
        <div className="wrap">
          <div className="cta__panel reveal">
            <h2>
              {s.cta.h.pre}
              <mark>{s.cta.h.mark}</mark>
              {s.cta.h.post}
            </h2>
            <p>{s.cta.sub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary" href={href("/contact")}>
                {s.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
