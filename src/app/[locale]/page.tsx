import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkle,
  Browsers,
  DeviceMobile,
  ChartBar,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { isLocale, localeHref, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { SITE } from "@/lib/seo";
import { showStatBand, visibleStats } from "@/lib/stats";
import { visibleTestimonials } from "@/lib/testimonials";
import KampusMark from "../components/KampusMark";
import Ticker from "../components/Ticker";
import HeroMark from "../components/HeroMark";
import LocaleDemo from "../components/LocaleDemo";
import StatBand from "../components/StatBand";
import ProcessScroller from "../components/ProcessScroller";
import QuoteGrid from "../components/QuoteGrid";
import Faq from "../components/Faq";

const SVC_ICONS = [Sparkle, Browsers, DeviceMobile, ChartBar];
const SVC_ANCHORS = ["ai", "web", "mobile", "data"];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const href = (path: string) => localeHref(locale, path);

  const stats = visibleStats().map((s) => ({
    value: s.value,
    suffix: s.suffix,
    label: dict.home.stats.labels[s.id],
  }));

  const showQuotes = visibleTestimonials().length > 0;

  return (
    <main id="main">
      {/* ---- Hero ---- */}
      <section className="hero grid-field grid-field--ruled">
        <span className="sheet-note sheet-note--tr" aria-hidden="true">
          ACK · EN / UR / AR · GRID 72
        </span>
        <div className="wrap">
          <div className="hero__grid">
            <div>
              <h1>
                {dict.home.hero.h.pre}
                <mark>{dict.home.hero.h.mark}</mark>
                {dict.home.hero.h.post}
              </h1>
              <p className="hero__sub">{dict.home.hero.sub}</p>
              <div className="hero__actions">
                <Link className="btn btn--accent" href={href("/contact")}>
                  {dict.home.hero.ctaPrimary}
                </Link>
                <Link className="btn btn--ghost" href={href("/work")}>
                  {dict.home.hero.ctaSecondary}
                </Link>
              </div>
              <p className="hero__trust">{dict.home.hero.trust}</p>
            </div>
            <div className="hero__stage">
              <HeroMark />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Capability ticker ---- */}
      <Ticker items={dict.home.ticker} />

      {/* ---- Four layers ---- */}
      <section className="section">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{dict.home.services.eyebrow}</span>
            <h2>
              {dict.home.services.h.pre}
              <mark>{dict.home.services.h.mark}</mark>
              {dict.home.services.h.post}
            </h2>
            <p>{dict.home.services.sub}</p>
          </div>
          <div className="svcindex reveal">
            {dict.home.services.items.map((item, i) => {
              const Icon = SVC_ICONS[i % SVC_ICONS.length];
              return (
                <Link
                  className="svcindex__row"
                  href={href(`/services#${SVC_ANCHORS[i]}`)}
                  key={item.title}
                >
                  <span className="svcindex__idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon size={26} weight="regular" />
                  <h3>{item.title}</h3>
                  <p>
                    <span className="svcindex__line">{item.line}</span>
                    {item.desc}
                  </p>
                  <span className="svcindex__go">
                    <ArrowRight className="icon-flip" size={16} weight="bold" />
                  </span>
                </Link>
              );
            })}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn--ghost" href={href("/services")}>
              {dict.home.services.cta}
            </Link>
          </p>
        </div>
      </section>

      {/* ---- The multilingual difference ---- */}
      <section className="section section--tint grid-field">
        <div className="wrap">
          <div className="diff__grid">
            <div className="reveal">
              <span className="eyebrow">{dict.home.difference.eyebrow}</span>
              <h2>
                {dict.home.difference.h.pre}
                <mark>{dict.home.difference.h.mark}</mark>
                {dict.home.difference.h.post}
              </h2>
              <p className="diff__sub">{dict.home.difference.sub}</p>
              <ul className="diff__points">
                {dict.home.difference.points.map((p) => (
                  <li key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <LocaleDemo
                title={dict.home.difference.demoTitle}
                caption={dict.home.difference.demoCaption}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Flagship: Kampus ---- */}
      <section className="flag section grid-field grid-field--dark">
        <span className="sheet-note sheet-note--br" aria-hidden="true">
          KAMPUS · CASE 01 · 3 SCRIPTS
        </span>
        <div className="wrap">
          <div className="flag__grid">
            <div className="reveal">
              <span className="eyebrow">{dict.home.flagship.eyebrow}</span>
              <h2>
                {dict.home.flagship.h.pre}
                <mark>{dict.home.flagship.h.mark}</mark>
                {dict.home.flagship.h.post}
              </h2>
              <p className="flag__sub">{dict.home.flagship.sub}</p>
              <div className="flag__facts">
                {dict.home.flagship.facts.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
              <div className="flag__actions">
                <Link className="btn btn--accent" href={href("/work/kampus")}>
                  {dict.home.flagship.cta}
                </Link>
                <a
                  className="flag__visit"
                  href="https://kampuscloud.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.home.flagship.visit} ↗
                </a>
              </div>
            </div>
            <div className="reveal" style={{ display: "grid", placeItems: "center" }}>
              <KampusMark size={220} tone="dark" title="Kampus" className="floatmark floatmark--lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Industries ---- */}
      <section className="section">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="eyebrow">{dict.home.industries.eyebrow}</span>
            <h2>
              {dict.home.industries.h.pre}
              <mark>{dict.home.industries.h.mark}</mark>
              {dict.home.industries.h.post}
            </h2>
            <p>{dict.home.industries.sub}</p>
          </div>
          <div className="indstrip reveal">
            {dict.industries.items.map((ind) => (
              <Link href={href("/industries")} key={ind.name}>
                {ind.name}
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn--ghost" href={href("/industries")}>
              {dict.home.industries.cta}
            </Link>
          </p>
        </div>
      </section>

      {/* ---- Stats ---- */}
      {/* Dropped entirely rather than shown thin: in production only figures
          marked verified survive, and one lonely number reads as a bug. */}
      {showStatBand() && (
        <StatBand
          eyebrow={dict.home.stats.eyebrow}
          title={dict.home.stats.h}
          items={stats}
        />
      )}

      {/* ---- Process ---- */}
      <section className="section grid-field grid-field--ruled">
        <span className="sheet-note sheet-note--bl" aria-hidden="true">
          PROCESS · 01–05
        </span>
        <div className="wrap">
          <div className="section__head section__head--center reveal">
            <span className="eyebrow">{dict.home.process.eyebrow}</span>
            <h2>
              {dict.home.process.h.pre}
              <mark>{dict.home.process.h.mark}</mark>
              {dict.home.process.h.post}
            </h2>
          </div>
          <ProcessScroller steps={dict.home.process.steps} />
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      {showQuotes && (
        <section className="section section--tint">
          <div className="wrap">
            <div className="section__head section__head--center reveal">
              <h2>
                {dict.home.quotes.title.pre}
                <mark>{dict.home.quotes.title.mark}</mark>
                {dict.home.quotes.title.post}
              </h2>
            </div>
            <QuoteGrid locale={locale} limit={3} />
            <p style={{ textAlign: "center", marginTop: "1.75rem" }}>
              <Link className="btn btn--ghost" href={href("/testimonials")}>
                {dict.home.quotes.cta}
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* ---- FAQ ---- */}
      <section className="section">
        <div className="wrap">
          <div className="section__head section__head--center reveal">
            <span className="eyebrow">{dict.home.faq.eyebrow}</span>
            <h2>
              {dict.home.faq.h.pre}
              <mark>{dict.home.faq.h.mark}</mark>
              {dict.home.faq.h.post}
            </h2>
          </div>
          <div className="reveal">
            <Faq items={dict.home.faq.items} />
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta__panel reveal">
            <h2>
              {dict.home.cta.h.pre}
              <mark>{dict.home.cta.h.mark}</mark>
              {dict.home.cta.h.post}
            </h2>
            <p>{dict.home.cta.sub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary" href={href("/contact")}>
                {dict.home.cta.button}
              </Link>
              <span className="cta__or">{dict.home.cta.or}</span>
              <a className="cta__mail" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
