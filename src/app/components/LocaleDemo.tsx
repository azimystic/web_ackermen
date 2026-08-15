"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Live multilingual demo: a mini product card that re-renders in
 * English / Urdu / Arabic, flipping text direction and mirroring layout in
 * real time. Carries all three languages itself, independent of page locale.
 */
type DemoLocale = "en" | "ur" | "ar";

const DEMO: Record<
  DemoLocale,
  {
    dir: "ltr" | "rtl";
    fontClass: string;
    tab: string;
    title: string;
    chip: string;
    rows: { label: string; sub: string; num: string }[];
  }
> = {
  en: {
    dir: "ltr",
    fontClass: "demo-font-en",
    tab: "English",
    title: "Fee collection",
    chip: "Live",
    rows: [
      { label: "Grade 6 term fees", sub: "142 students", num: "PKR 1,278,000" },
      { label: "Transport", sub: "88 students", num: "PKR 264,000" },
      { label: "Late fees applied", sub: "Auto, daily", num: "PKR 41,500" },
    ],
  },
  ur: {
    dir: "rtl",
    fontClass: "demo-font-ur",
    tab: "اردو",
    title: "فیس وصولی",
    chip: "لائیو",
    rows: [
      { label: "جماعت ششم کی سہ ماہی فیس", sub: "142 طلبہ", num: "PKR 1,278,000" },
      { label: "ٹرانسپورٹ", sub: "88 طلبہ", num: "PKR 264,000" },
      { label: "لیٹ فیس لاگو", sub: "خودکار، روزانہ", num: "PKR 41,500" },
    ],
  },
  ar: {
    dir: "rtl",
    fontClass: "demo-font-ar",
    tab: "العربية",
    title: "تحصيل الرسوم",
    chip: "مباشر",
    rows: [
      { label: "رسوم الفصل للصف السادس", sub: "142 طالبًا", num: "PKR 1,278,000" },
      { label: "النقل", sub: "88 طالبًا", num: "PKR 264,000" },
      { label: "غرامات التأخير", sub: "تلقائي، يوميًا", num: "PKR 41,500" },
    ],
  },
};

const ORDER: DemoLocale[] = ["en", "ur", "ar"];

export default function LocaleDemo({
  title,
  caption,
}: {
  title: string;
  caption: string;
}) {
  const [locale, setLocale] = useState<DemoLocale>("en");
  const reduced = useReducedMotion();
  const d = DEMO[locale];
  const slide = d.dir === "rtl" ? -14 : 14;

  return (
    <div className="ldemo">
      <div className="ldemo__tabs" role="tablist" aria-label={title}>
        {ORDER.map((l) => (
          <button
            key={l}
            role="tab"
            aria-selected={l === locale}
            className={l === locale ? "is-active" : ""}
            onClick={() => setLocale(l)}
            lang={l}
          >
            {DEMO[l].tab}
          </button>
        ))}
      </div>

      <div className="ldemo__body">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={locale}
            dir={d.dir}
            lang={locale}
            className={`mini ${d.fontClass}`}
            initial={reduced ? false : { opacity: 0, x: slide }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -slide }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mini__head">
              <b>{d.title}</b>
              <span className="mini__chip">{d.chip}</span>
            </div>
            {d.rows.map((row) => (
              <div className="mini__row" key={row.label}>
                <span>
                  {row.label}
                  <br />
                  <small>{row.sub}</small>
                </span>
                <span className="mini__num">{row.num}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="ldemo__caption">{caption}</p>
    </div>
  );
}
