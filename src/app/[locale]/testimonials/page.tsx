import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { hasRealTestimonials, visibleTestimonials } from "@/lib/testimonials";
import PageIntro from "../../components/PageIntro";
import QuoteGrid from "../../components/QuoteGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.testimonials.title,
    description: dict.meta.testimonials.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/testimonials")),
      languages: {
        en: absoluteUrl(localeHref("en", "/testimonials")),
        ur: absoluteUrl(localeHref("ur", "/testimonials")),
        ar: absoluteUrl(localeHref("ar", "/testimonials")),
        "x-default": absoluteUrl(localeHref("en", "/testimonials")),
      },
    },
    // The quotes on this page are unreplaced demo content (see lib/testimonials.ts) -
    // keep it out of Google's index so invented client praise never surfaces in search
    // results. Drop this once at least one entry carries a recorded `permission`.
    ...(hasRealTestimonials() ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const hasAny = visibleTestimonials().length > 0;

  return (
    <main id="main">
      <PageIntro
        eyebrow={dict.testimonials.intro.eyebrow}
        h={dict.testimonials.intro.h}
        sub={dict.testimonials.intro.sub}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {hasAny ? (
            <QuoteGrid locale={locale} />
          ) : (
            <p className="cases__note">{dict.testimonials.empty}</p>
          )}
        </div>
      </section>
    </main>
  );
}
