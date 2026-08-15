import type { H } from "@/lib/i18n/dictionaries/en";

/** Shared page hero on the blueprint grid field. */
export default function PageIntro({
  eyebrow,
  h,
  sub,
}: {
  eyebrow: string;
  h: H;
  sub?: string;
}) {
  return (
    <header className="pintro grid-field">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          {h.pre}
          <mark>{h.mark}</mark>
          {h.post}
        </h1>
        {sub && <p className="pintro__sub">{sub}</p>}
      </div>
    </header>
  );
}
