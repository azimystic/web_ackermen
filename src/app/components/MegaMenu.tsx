"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type MegaItem = {
  label: string;
  sub: string;
  href: string;
};

export type MegaPanel = {
  heading: string;
  items: { title: string; desc: string; href: string }[];
};

/**
 * Nav dropdown: a rail of sections on the start side, a panel of detail on
 * the end side. Opens on hover for pointers, on click/Enter for keyboards and
 * touch, and closes on Escape or when focus leaves.
 */
export default function MegaMenu({
  label,
  items,
  panel,
  overviewHref,
  overviewLabel,
}: {
  label: string;
  items: MegaItem[];
  panel: MegaPanel;
  overviewHref: string;
  overviewLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const reduced = useReducedMotion();
  const id = useId();

  const cancelClose = () => window.clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        wrapRef.current?.querySelector<HTMLButtonElement>(".mega__trigger")?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div
      className="mega"
      ref={wrapRef}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") {
          cancelClose();
          setOpen(true);
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") scheduleClose();
      }}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`mega__trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <CaretDown size={12} weight="bold" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            className="mega__panel"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mega__rail">
              <span className="mega__railhead">{label}</span>
              <Link
                className="mega__overview"
                href={overviewHref}
                onClick={() => setOpen(false)}
              >
                <b>{overviewLabel}</b>
              </Link>
              <ul>
                {/* Keyed by position, not href: these are a fixed, ordered
                    list that never reorders, and several can legitimately
                    share a destination. Keying on href silently collided. */}
                {items.map((it, i) => (
                  <li key={i}>
                    <Link
                      href={it.href}
                      className={i === active ? "is-active" : ""}
                      onPointerEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setOpen(false)}
                    >
                      <b>{it.label}</b>
                      <span>{it.sub}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mega__detail">
              <span className="mega__detailhead">{panel.heading}</span>
              <div className="mega__grid">
                {panel.items.map((p, i) => (
                  <Link
                    href={p.href}
                    key={i}
                    onClick={() => setOpen(false)}
                  >
                    <b>{p.title}</b>
                    <span>{p.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
