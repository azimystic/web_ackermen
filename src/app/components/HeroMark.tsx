import Image from "next/image";

/**
 * Hero visual: the Ackerman mark, large and unframed on the gridded field.
 * A slow float keeps it alive; it holds still under prefers-reduced-motion
 * (see globals.css).
 */
export default function HeroMark({ caption }: { caption?: string }) {
  return (
    <figure className="heromark">
      <Image
        src="/logo@3x.png"
        alt="The Ackerman mark"
        width={504}
        height={504}
        sizes="(max-width: 1023px) 60vw, 26vw"
        className="heromark__img"
        priority
      />
      {caption && <figcaption className="heromark__caption">{caption}</figcaption>}
    </figure>
  );
}
