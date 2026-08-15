/** Capability marquee - pure CSS animation, duplicated track for the loop.
    Paused on hover; reversed under RTL; wraps statically under
    prefers-reduced-motion (see globals.css). */
export default function Ticker({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <>
      {items.map((item) => (
        <span
          className="ticker__item"
          key={`${hidden ? "b" : "a"}-${item}`}
          aria-hidden={hidden || undefined}
        >
          {item}
        </span>
      ))}
    </>
  );

  return (
    <div className="ticker" role="marquee">
      <div className="ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
