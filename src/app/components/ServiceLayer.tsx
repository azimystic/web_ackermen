"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import Carousel from "./Carousel";

type Card = { title: string; desc: string; points: string[] };

/**
 * A service pillar's capability cards, in a carousel so the page stays short.
 * Each card shows only its headline promise plus two proof points; the rest
 * lives on the card's own hover state.
 */
export default function ServiceLayer({
  cards,
  label,
}: {
  cards: Card[];
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10% 0px -6% 0px" });

  return (
    <div ref={ref}>
      <Carousel label={label}>
        {cards.map((card, i) => (
          <motion.article
            className="cap"
            key={card.title}
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={inView || reduced ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: reduced ? 0 : i * 0.06,
            }}
          >
            <span className="cap__idx">{String(i + 1).padStart(2, "0")}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <ul>
              {card.points.slice(0, 2).map((p) => (
                <li key={p}>
                  <Check size={13} weight="bold" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </Carousel>
    </div>
  );
}
