import Image from "next/image";

/**
 * Hero visual: the Ackerman mark, large and unframed on the gridded field.
 * A slow float keeps it alive; it holds still under prefers-reduced-motion
 * (see globals.css).
 *
 * `unoptimized`: this asset is already sized for its one use (1024px, well
 * above the clamp(11rem,26vw,21rem) display width even at 3x DPR), so we
 * skip Next's on-demand resizer rather than let it guess a srcset bucket —
 * a too-small guess reads as permanent blur, and only clears on a browser
 * zoom because zooming forces a different bucket to be picked.
 */
export default function HeroMark({ caption }: { caption?: string }) {
  return (
    <figure className="heromark">
      <Image
        src="/logo-hero.png"
        alt="The Ackerman mark"
        width={1024}
        height={1024}
        unoptimized
        className="heromark__img"
        priority
      />
      {caption && <figcaption className="heromark__caption">{caption}</figcaption>}
    </figure>
  );
}
