"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

/**
 * Snap-scrolling carousel. Native scroll does the work, so it stays smooth
 * on touch and keyboard-reachable; the arrows page by one card width and
 * disable at each end. Direction-aware, so RTL pages behave correctly.
 */
export default function Carousel({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // normalise for RTL, where scrollLeft runs negative in some engines
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft);
    setAtStart(pos < 8);
    setAtEnd(pos >= max - 8);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    const rtl = getComputedStyle(el).direction === "rtl";
    el.scrollBy({ left: step * dir * (rtl ? -1 : 1), behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="carousel__track" ref={track} tabIndex={0} role="group" aria-label={label}>
        {children}
      </div>
      <div className="carousel__nav">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous"
        >
          <CaretLeft className="icon-flip" size={16} weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Next"
        >
          <CaretRight className="icon-flip" size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}
