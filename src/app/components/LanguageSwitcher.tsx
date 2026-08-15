"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, CaretDown, Check } from "@phosphor-icons/react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NAMES,
  localeHref,
  type Locale,
} from "@/lib/i18n/config";

/** Strip a leading /ur or /ar from the current path. */
function bareTail(pathname: string): string {
  const seg = pathname.split("/")[1];
  if ((LOCALES as readonly string[]).includes(seg) && seg !== DEFAULT_LOCALE) {
    return pathname.slice(seg.length + 1) || "/";
  }
  return pathname || "/";
}

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const switchTo = (target: Locale) => {
    setOpen(false);
    if (target === locale) return;
    document.cookie = `ack_locale=${target}; path=/; max-age=31536000; samesite=lax`;
    router.push(localeHref(target, bareTail(pathname)));
  };

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Globe size={16} weight="bold" />
        <span>{LOCALE_NAMES[locale]}</span>
        <CaretDown size={12} weight="bold" className={open ? "is-flipped" : ""} />
      </button>
      {open && (
        <ul className="lang__menu" role="listbox" aria-label="Language">
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                className={l === locale ? "is-active" : ""}
                onClick={() => switchTo(l)}
                lang={l}
              >
                {LOCALE_NAMES[l]}
                {l === locale && <Check size={14} weight="bold" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
