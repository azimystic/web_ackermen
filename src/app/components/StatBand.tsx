"use client";

import { useEffect, useRef, useState } from "react";
import type { H } from "@/lib/i18n/dictionaries/en";

const DURATION = 1400;

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatBand({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: H;
  items: StatItem[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          setProgress(t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="statband section">
      <div className="wrap">
        <div className="section__head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {title.pre}
            <mark>{title.mark}</mark>
            {title.post}
          </h2>
        </div>

        <div
          className="statband__row"
          ref={ref}
          style={{ "--stat-cols": items.length } as React.CSSProperties}
        >
          {items.map((s) => (
            <div className="statband__cell" key={s.label}>
              <strong className="statband__num">
                {Math.round(s.value * progress)}
                {s.suffix && <em>{s.suffix}</em>}
              </strong>
              <span className="statband__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
