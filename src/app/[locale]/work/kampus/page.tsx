import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import KampusMark from "../../../components/KampusMark";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.kampus.title,
    description: dict.meta.kampus.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/work/kampus")),
      languages: {
        en: absoluteUrl(localeHref("en", "/work/kampus")),
        ur: absoluteUrl(localeHref("ur", "/work/kampus")),
        ar: absoluteUrl(localeHref("ar", "/work/kampus")),
        "x-default": absoluteUrl(localeHref("en", "/work/kampus")),
      },
    },
  };
}

export default async function KampusCasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const c = dict.kampusCase;
  const href = (path: string) => localeHref(locale, path);

  return (
    <main id="main">
      {/* ---- Case hero ---- */}
      <header className="pintro grid-field" style={{ paddingBottom: "clamp(3rem, 7vh, 5rem)" }}>
        <div className="wrap">
          <div className="case-hero__grid">
            <div>
              <div className="case-meta">
                <span>{c.meta.sector}</span>
                <span>{c.meta.type}</span>
                <span>{c.meta.languages}</span>
                <span>{c.meta.platforms}</span>
              </div>
              <h1>
                {c.h.pre}
                <mark>{c.h.mark}</mark>
                {c.h.post}
              </h1>
              <p className="pintro__sub">{c.sub}</p>
            </div>
            <div className="case-hero__mark reveal">
              <KampusMark size={200} tone="light" title="Kampus" className="floatmark floatmark--lg" />
            </div>
          </div>
        </div>
      </header>

      {/* ---- Challenge ---- */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="case-prose reveal">
            <span className="eyebrow">{c.challenge.eyebrow}</span>
            <h2>{c.challenge.title}</h2>
            <p>{c.challenge.body}</p>
          </div>
        </div>
      </section>

      {/* ---- What we built ---- */}
      <section className="section grid-field">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{c.built.eyebrow}</span>
            <h2>
              {c.built.h.pre}
              <mark>{c.built.h.mark}</mark>
              {c.built.h.post}
            </h2>
          </div>
          <p className="anno reveal" style={{ marginBottom: "0.8rem", display: "block" }}>
            {c.built.modulesLabel}
          </p>
          <div className="modgrid reveal">
            {c.built.modules.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <p
            className="anno reveal"
            style={{ margin: "1.6rem 0 0.8rem", display: "block" }}
          >
            {c.built.portalsLabel}
          </p>
          <div className="modgrid modgrid--portals reveal">
            {c.built.portals.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The RTL story ---- */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{c.rtl.eyebrow}</span>
            <h2>
              {c.rtl.h.pre}
              <mark>{c.rtl.h.mark}</mark>
              {c.rtl.h.post}
            </h2>
            <p>{c.rtl.body}</p>
          </div>
        </div>
      </section>

      {/* ---- Outcomes ---- */}
      <section className="section">
        <div className="wrap">
          <div className="case-prose reveal">
            <span className="eyebrow">{c.outcomes.eyebrow}</span>
            <h2>{c.outcomes.title}</h2>
            <p>{c.outcomes.body}</p>
            <p style={{ marginTop: "1rem" }}>
              <a
                className="btn btn--ghost"
                href="https://kampuscloud.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.outcomes.visit} <ArrowUpRight size={15} weight="bold" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta__panel reveal">
            <h2>
              {c.cta.h.pre}
              <mark>{c.cta.h.mark}</mark>
              {c.cta.h.post}
            </h2>
            <p>{c.cta.sub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary" href={href("/contact")}>
                {c.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
