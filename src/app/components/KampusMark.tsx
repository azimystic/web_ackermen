import Image from "next/image";

/**
 * Kampus's own mark, from their supplied brand asset (not an Ackerman
 * recreation). Two tones ship: `light` (ink + amber, for placement on paper)
 * and `dark` (cream + amber, for placement on ink bands).
 */
export default function KampusMark({
  size = 40,
  tone = "light",
  title,
  className,
}: {
  size?: number;
  tone?: "light" | "dark";
  title?: string;
  className?: string;
}) {
  return (
    <Image
      src={tone === "dark" ? "/kampus-mark-dark.png" : "/kampus-mark-light.png"}
      alt={title ?? ""}
      width={size}
      height={size}
      className={className}
      aria-hidden={title ? undefined : true}
    />
  );
}
