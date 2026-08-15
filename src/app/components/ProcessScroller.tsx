"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";

type Step = { title: string; desc: string };

/**
 * The signature scroll moment: process steps render as huge display
 * headlines; the one in focus is full ink, the rest sit grayed on the page -
 * driven by scroll progress through the section.
 */
export default function ProcessScroller({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.45"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(v * steps.length))
    );
    setActive(idx);
  });

  return (
    <ol className="process__list" ref={ref}>
      {steps.map((step, i) => {
        const on = reduced || i <= active;
        return (
          <li
            className="process__step"
            key={step.title}
            style={
              {
                "--step-ink": on ? "var(--ink)" : "var(--ink-faint)",
              } as React.CSSProperties
            }
          >
            <span className="process__idx">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </li>
        );
      })}
    </ol>
  );
}
