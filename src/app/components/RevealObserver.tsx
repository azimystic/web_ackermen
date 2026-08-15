"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds .is-visible to every .reveal element as it enters the viewport,
 * staggering siblings so grids cascade instead of popping at once.
 *
 * Re-runs on every route change: this component lives in the layout, which
 * does NOT remount during client-side navigation, so a mount-only effect
 * would leave every subsequent page's .reveal elements at opacity 0 until a
 * hard reload. A MutationObserver covers content that arrives later still.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Hero entrance animations are gated on this class so the sequence only
    // starts once the display face is in - no mid-swap overflow transient.
    document.fonts.ready.then(() =>
      document.documentElement.classList.add("fonts-ready")
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    // Stagger index = position among .reveal siblings sharing a parent.
    const counts = new Map<Element, number>();
    // Scoped to this effect run, not stamped on the DOM: a marker that
    // outlived cleanup would make the next run skip elements and leave them
    // observed by a disconnected observer (which is what React's dev-mode
    // double-invoke does).
    const bound = new WeakSet<HTMLElement>();

    const observe = (el: HTMLElement) => {
      if (bound.has(el)) return;
      bound.add(el);
      const parent = el.parentElement;
      if (parent) {
        const i = counts.get(parent) ?? 0;
        counts.set(parent, i + 1);
        el.style.setProperty("--i", String(Math.min(i, 7)));
      }
      io.observe(el);
    };

    const scan = () =>
      document.querySelectorAll<HTMLElement>(".reveal").forEach(observe);

    scan();

    // Safety net: anything already in view when the route settles is shown
    // even if the observer callback has not fired yet.
    const settle = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
    }, 120);

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(settle);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
