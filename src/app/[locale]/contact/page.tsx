import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { SITE, absoluteUrl } from "@/lib/seo";
import PageIntro from "../../components/PageIntro";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: {
      canonical: absoluteUrl(localeHref(locale, "/contact")),
      languages: {
        en: absoluteUrl(localeHref("en", "/contact")),
        ur: absoluteUrl(localeHref("ur", "/contact")),
        ar: absoluteUrl(localeHref("ar", "/contact")),
        "x-default": absoluteUrl(localeHref("en", "/contact")),
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);

  return (
    <main id="main">
      <PageIntro
        eyebrow={dict.contact.intro.eyebrow}
        h={dict.contact.intro.h}
        sub={dict.contact.intro.sub}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="sr-only">{dict.contact.intro.eyebrow}</h2>
          <div className="contact-grid">
            <div className="reveal">
              <ContactForm labels={dict.contact.form} toEmail={SITE.email} />
            </div>
            <aside className="direct reveal">
              <span className="eyebrow">{dict.contact.direct.eyebrow}</span>
              <h3>{dict.contact.direct.title}</h3>
              <p>{dict.contact.direct.body}</p>
              <a className="direct__mail" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <h3 style={{ marginTop: "1.9rem" }}>
                {dict.contact.direct.responseTitle}
              </h3>
              <ol className="next">
                {dict.contact.direct.responseSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
