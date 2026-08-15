"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Check } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoMark from "./LogoMark";
import MegaMenu from "./MegaMenu";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NAMES,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";
import type { Dict } from "@/lib/i18n/dictionaries/en";

type NavLabels = {
  services: string;
  industries: string;
  work: string;
  pricing: string;
  testimonials: string;
  about: string;
  contact: string;
  cta: string;
};

function bareTail(pathname: string): string {
  const seg = pathname.split("/")[1];
  if ((LOCALES as readonly string[]).includes(seg) && seg !== DEFAULT_LOCALE) {
    return pathname.slice(seg.length + 1) || "/";
  }
  return pathname || "/";
}

export default function Nav({
  locale,
  labels,
  services,
  industries,
  summaryLines,
  overviewLabels,
}: {
  locale: Locale;
  labels: NavLabels;
  services: Dict["services"];
  industries: Dict["industries"];
  /** Short one-liners per service pillar, in pillar order. */
  summaryLines: string[];
  overviewLabels: { services: string; industries: string };
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const href = (path: string) => localeHref(locale, path);
  const home = href("/");

  // Flat list for the mobile drawer; desktop uses the two dropdowns below.
  const links = [
    { label: labels.services, to: href("/services") },
    { label: labels.industries, to: href("/industries") },
    { label: labels.work, to: href("/work") },
    { label: labels.pricing, to: href("/pricing") },
    { label: labels.about, to: href("/about") },
    { label: labels.contact, to: href("/contact") },
  ];

  // Subtitles come from the home summary lines, which are already written
  // short; the dropdown must stay scannable, not become a second page.
  const serviceSections = [
    { label: services.rail.ai, to: "#ai" },
    { label: services.rail.web, to: "#web" },
    { label: services.rail.mobile, to: "#mobile" },
    { label: services.rail.data, to: "#data" },
  ].map((s, i) => ({
    label: s.label,
    sub: summaryLines[i] ?? "",
    href: href(`/services${s.to}`),
  }));

  const switchLocale = (target: Locale) => {
    setOpen(false);
    if (target === locale) return;
    document.cookie = `ack_locale=${target}; path=/; max-age=31536000; samesite=lax`;
    router.push(localeHref(target, bareTail(pathname)));
  };

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <button
          type="button"
          className={`nav__burger${open ? " is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((o) => !o)}
        >
          <i />
          <i />
          <i />
        </button>

        <Link className="nav__brand" href={home}>
          <LogoMark size={26} />
          <span>Ackerman</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <MegaMenu
            label={labels.services}
            overviewHref={href("/services")}
            overviewLabel={overviewLabels.services}
            items={serviceSections}
            panel={{
              heading: services.ai.eyebrow,
              items: services.ai.cards.map((c) => ({
                title: c.title,
                desc: c.points[0],
                href: href("/services#ai"),
              })),
            }}
          />
          <MegaMenu
            label={labels.industries}
            overviewHref={href("/industries")}
            overviewLabel={overviewLabels.industries}
            items={industries.items.slice(0, 4).map((item, i) => ({
              label: item.name,
              sub: item.who,
              href: href(`/industries#ind-${i}`),
            }))}
            panel={{
              heading: industries.intro.eyebrow,
              items: industries.items.slice(4).map((item, i) => ({
                title: item.name,
                desc: item.who,
                href: href(`/industries#ind-${i + 4}`),
              })),
            }}
          />
          <Link href={href("/work")}>{labels.work}</Link>
          <Link href={href("/pricing")}>{labels.pricing}</Link>
          <Link href={href("/about")}>{labels.about}</Link>
          <Link href={href("/contact")}>{labels.contact}</Link>
        </nav>

        <LanguageSwitcher locale={locale} />

        <Link className="btn btn--primary nav__cta" href={href("/contact")}>
          {labels.cta}
        </Link>
      </header>

      {open && (
        <>
          <div className="drawer-overlay" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside className="drawer" id="mobile-drawer" aria-label="Menu">
            <div className="drawer__head">
              <Link className="drawer__brand" href={home} onClick={() => setOpen(false)}>
                <LogoMark size={22} />
                Ackerman
              </Link>
              <button
                type="button"
                className="drawer__close"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <ul className="drawer__links">
              {links.map((l) => (
                <li key={l.to}>
                  <Link href={l.to} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="drawer__langs">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  className={l === locale ? "is-active" : ""}
                  onClick={() => switchLocale(l)}
                  lang={l}
                >
                  {LOCALE_NAMES[l]}
                  {l === locale && <Check size={16} weight="bold" />}
                </button>
              ))}
            </div>

            <div className="drawer__cta">
              <Link
                className="btn btn--primary"
                href={href("/contact")}
                onClick={() => setOpen(false)}
              >
                {labels.cta}
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
