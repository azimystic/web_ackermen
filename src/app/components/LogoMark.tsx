import Image from "next/image";

/**
 * Ackerman mark, from the supplied asset. Rendered as a fixed-size image so
 * it stays identical everywhere it appears.
 */
export default function LogoMark({
  size = 28,
  title,
}: {
  size?: number;
  /** Omit inside a labelled brand link so the name is not announced twice. */
  title?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt={title ?? ""}
      width={size}
      height={size}
      className="logomark"
      priority
      aria-hidden={title ? undefined : true}
    />
  );
}
