/**
 * Authored cover art for case-study cards - drawn from the design system's
 * own grid vocabulary rather than stock or borrowed product photography.
 * Each tone gives a distinct plate so a grid of cards reads as a set.
 */
export default function CaseCover({
  tone = "blue",
  metric,
  label,
  index,
}: {
  tone?: "blue" | "ink" | "slate";
  metric: string;
  label: string;
  index: number;
}) {
  return (
    <div className={`cover cover--${tone}`} aria-hidden="true">
      <svg className="cover__grid" viewBox="0 0 320 180" preserveAspectRatio="none">
        <defs>
          <pattern
            id={`cover-grid-${index}`}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path d="M20 0 L0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="320" height="180" fill={`url(#cover-grid-${index})`} />
      </svg>
      <div className="cover__plate">
        <strong className="cover__metric">{metric}</strong>
        <span className="cover__label">{label}</span>
      </div>
    </div>
  );
}
