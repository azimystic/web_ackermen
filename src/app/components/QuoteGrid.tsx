import { Quotes } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n/config";
import { visibleTestimonials } from "@/lib/testimonials";

/** Initials avatar - no stock faces standing in for people. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function QuoteGrid({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number;
}) {
  const all = visibleTestimonials();
  const items = limit ? all.slice(0, limit) : all;
  if (items.length === 0) return null;

  return (
    <div className="quotes">
      {items.map((t) => {
        const q = t.quote[locale];
        return (
          <figure className="quote reveal" key={t.id}>
            <span className="quote__mark">
              <Quotes size={20} weight="fill" />
            </span>
            <blockquote>
              &ldquo;{q.before}
              <span className="hl">{q.highlight}</span>
              {q.after}&rdquo;
            </blockquote>
            <figcaption>
              <span className="quote__avatar" aria-hidden="true">
                {initials(t.name)}
              </span>
              <span>
                <b>{t.name}</b>
                {t.role}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
