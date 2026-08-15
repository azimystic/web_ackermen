import Link from "next/link";
import { SITE } from "@/lib/seo";
import {
  LOCALES,
  LOCALE_NAMES,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { hasPublishedArticles } from "@/lib/insights";
import LogoMark from "./LogoMark";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const year = new Date().getFullYear();
  const href = (path: string) => localeHref(locale, path);

  const anchors = [
    { label: dict.services.rail.ai, to: href("/services#ai") },
    { label: dict.services.rail.web, to: href("/services#web") },
    { label: dict.services.rail.mobile, to: href("/services#mobile") },
    { label: dict.services.rail.data, to: href("/services#data") },
  ];

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Ackerman
      </h2>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__about">
            <Link className="footer__brand" href={href("/")}>
              <LogoMark size={26} />
              <span>Ackerman</span>
            </Link>
            <p>{dict.footer.tagline}</p>
            <a className="footer__mail" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            {/* Visible counterpart to the PostalAddress in the Organization
                JSON-LD. Structured data that no on-page text corroborates is
                a weak signal, and location is the one local ranking hook this
                site actually has. */}
            <address className="footer__place">
              {SITE.place.locality}, {SITE.place.countryName}
              {SITE.place.telephone && (
                <>
                  <br />
                  <a href={`tel:${SITE.place.telephone.replace(/\s+/g, "")}`}>
                    {SITE.place.telephone}
                  </a>
                </>
              )}
            </address>
          </div>

          <nav className="footer__col" aria-label={dict.footer.sitemap}>
            <h3>{dict.footer.sitemap}</h3>
            <ul>
              <li><Link href={href("/")}>{dict.footer.home}</Link></li>
              <li><Link href={href("/services")}>{dict.nav.services}</Link></li>
              <li><Link href={href("/industries")}>{dict.nav.industries}</Link></li>
              <li><Link href={href("/work")}>{dict.nav.work}</Link></li>
              <li><Link href={href("/pricing")}>{dict.nav.pricing}</Link></li>
              {/* Appears by itself once the first article is published. */}
              {hasPublishedArticles(locale) && (
                <li><Link href={href("/insights")}>{dict.meta.insights.title}</Link></li>
              )}
              <li><Link href={href("/testimonials")}>{dict.nav.testimonials}</Link></li>
              <li><Link href={href("/about")}>{dict.nav.about}</Link></li>
              <li><Link href={href("/contact")}>{dict.nav.contact}</Link></li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label={dict.footer.servicesTitle}>
            <h3>{dict.footer.servicesTitle}</h3>
            <ul>
              {anchors.map((a) => (
                <li key={a.to}>
                  <Link href={a.to}>{a.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col footer__col--langs" aria-label={dict.footer.languagesTitle}>
            <h3>{dict.footer.languagesTitle}</h3>
            <ul>
              {LOCALES.map((l) => (
                <li key={l}>
                  <Link href={localeHref(l, "/")} lang={l} className={l === locale ? "is-on" : ""}>
                    {LOCALE_NAMES[l]}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="footer__langnote">{dict.footer.languagesNote}</p>
          </nav>
        </div>

        <div className="footer__base">
          <span>
            &copy; {year} {SITE.name}. {dict.footer.rights}
          </span>
          <span className="footer__langs">
            {LOCALES.map((l, i) => (
              <span key={l}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <span className={l === locale ? "is-on" : ""}>{l.toUpperCase()}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
