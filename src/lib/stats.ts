import { showPlaceholders } from "./placeholders";

/**
 * Stats shown in the "By the numbers" band.
 *
 * `verified` marks a figure that can actually be backed up if a prospect asks.
 * Unverified figures are demo copy: they are shown while developing and hidden
 * in production, because a headline number is exactly the kind of claim a
 * buyer will repeat back to you. See [[placeholders]].
 *
 * ⚠️ TODO(user): set `verified: true` on each of these once the real figure is
 * in place, adjusting the value to the true one first.
 */
export type Stat = {
  id: "projects" | "years" | "languages" | "industries";
  value: number;
  suffix?: string;
  /** true only where the number can be substantiated today. */
  verified: boolean;
};

export const STATS: Stat[] = [
  { id: "projects", value: 40, suffix: "+", verified: false },
  { id: "years", value: 6, suffix: "+", verified: false },
  // Kampus genuinely ships in English, Urdu and Arabic.
  { id: "languages", value: 3, verified: true },
  { id: "industries", value: 8, suffix: "+", verified: false },
];

export function visibleStats(): Stat[] {
  if (showPlaceholders()) return STATS;
  return STATS.filter((s) => s.verified);
}

/**
 * The band needs a row of figures to read as a band; a single lonely number
 * looks like a bug rather than a claim. Below this threshold the whole section
 * is dropped instead.
 */
export const MIN_STATS_FOR_BAND = 2;

export function showStatBand(): boolean {
  return visibleStats().length >= MIN_STATS_FOR_BAND;
}
