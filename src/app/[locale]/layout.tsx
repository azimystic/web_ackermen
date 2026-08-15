import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import {
  Archivo,
  Hanken_Grotesk,
  IBM_Plex_Mono,
  Cairo,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import "../globals.css";
import Nav from "../components/Nav";
import SiteFooter from "../components/SiteFooter";
import RevealObserver from "../components/RevealObserver";
import { SITE, absoluteUrl, pageTitle } from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_HTML_LANG,
  OG_LOCALE,
  dirFor,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";

const display = Archivo({
  variable: "--font-display-latin",
  subsets: ["latin"],
  axes: ["wdth"],
});

const body = Hanken_Grotesk({
  variable: "--font-body-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#f4f2ec",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** hreflang map shared by every page: en at /, ur and ar prefixed. */
function languageAlternates(path: string) {
  return {
    en: absoluteUrl(localeHref("en", path)),
    ur: absoluteUrl(localeHref("ur", path)),
    ar: absoluteUrl(localeHref("ar", path)),
    "x-default": absoluteUrl(localeHref("en", path)),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);

  const homeTitle = pageTitle(dict.meta.homeTitle);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: homeTitle,
      template: `%s | ${SITE.name}`,
    },
    description: dict.meta.homeDescription,
    keywords: [...SITE.keywords],
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "Software Development",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/")),
      languages: languageAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: absoluteUrl(localeHref(locale, "/")),
      siteName: SITE.name,
      title: homeTitle,
      description: dict.meta.homeDescription,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: homeTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: homeTitle,
      description: dict.meta.homeDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    // Favicon/apple-touch icon come from the src/app/icon.png and
    // apple-icon.png file convention, no manual declaration needed.
    manifest: "/manifest.webmanifest",
  };
}

function jsonLd(locale: Locale) {
  const dict = getDict(locale);
  const socials = Object.values(SITE.socials).filter(Boolean);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.organization.legalName,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.svg") },
    ...(socials.length ? { sameAs: socials } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["English", "Urdu", "Arabic"],
      },
    ],
    ...(SITE.organization.foundingDate
      ? { foundingDate: SITE.organization.foundingDate }
      : {}),
    areaServed: SITE.organization.areaServed,
    knowsAbout: [
      "ERP systems",
      "CRM platforms",
      "CMS development",
      "POS systems",
      "AI chatbots",
      "Workflow automation",
      "Data analysis",
      "Multilingual applications",
    ],
    description: dict.meta.homeDescription,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: dict.meta.homeDescription,
    inLanguage: ["en", "ur", "ar"],
    publisher: { "@id": `${SITE.url}#organization` },
  };

  return [organization, website];
}

const SKIP_LABEL: Record<Locale, string> = {
  en: "Skip to main content",
  ur: "مواد پر جائیں",
  ar: "تخطَّ إلى المحتوى",
};

/**
 * Impeccable direction contract - emitted as a real HTML comment (inside an
 * inert <template>) so it survives the production build and stays greppable.
 */
const DIRECTION_CONTRACT = `<!--
THESIS: The site is the portfolio: an engineering drafting sheet that proves capability by being trilingual, mirrored, and measured. It refuses the dark-hero agency template with a fabricated logo wall.
OWN-WORLD: Warm paper #f4f2ec ruled by a fine blueprint grid; cool ink #15171c; one electric blue #2b5bff in mark highlights, pill badges, and the #101321->#1637b8->#2b5bff gradient; Archivo display, Hanken Grotesk body, IBM Plex Mono annotations; 18px-radius hairline cards, 999px pills.
STORY: A buyer sees running systems (Kampus), feels the multilingual specialty by flipping the language switcher, and starts a project.
FIRST VIEWPORT: Gridded field; mono eyebrow pill; display headline with blue mark; sub and two pill CTAs on the start side; browser-framed Kampus shot on the end side; capability ticker at the fold. Signature interaction: the live locale/RTL flip.
FORM: Blueprint-editorial showcase, brief-pinned by the user's video reference; no roll (seed: brief-pinned).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);

  const fontClass =
    locale === "ar" ? "font-ar" : locale === "ur" ? "font-ur" : "font-en";

  return (
    <html
      lang={LOCALE_HTML_LANG[locale]}
      dir={dirFor(locale)}
      className={`${display.variable} ${body.variable} ${mono.variable} ${cairo.variable} ${nastaliq.variable} ${fontClass}`}
    >
      <head>
        {jsonLd(locale).map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
      </head>
      <body className="antialiased">
        <template dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <a href="#main" className="sr-only">
          {SKIP_LABEL[locale]}
        </a>
        <Nav
          locale={locale}
          labels={dict.nav}
          services={dict.services}
          industries={dict.industries}
          summaryLines={dict.home.services.items.map((i) => i.line)}
          overviewLabels={{
            services: dict.services.intro.eyebrow,
            industries: dict.industries.intro.eyebrow,
          }}
        />
        {children}
        <SiteFooter locale={locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
