/**
 * Stats shown in the "By the numbers" band.
 *
 * TODO(user): DEMO FIGURES - replace with your real numbers before launch.
 * Only `languages: 3` is independently verifiable today (Kampus ships in
 * English, Urdu and Arabic). Publishing the others as-is states things about
 * your business that are not yet established.
 */
export type Stat = {
  id: "projects" | "years" | "languages" | "industries";
  value: number;
  suffix?: string;
};

export const STATS: Stat[] = [
  { id: "projects", value: 40, suffix: "+" },
  { id: "years", value: 6, suffix: "+" },
  { id: "languages", value: 3 },
  { id: "industries", value: 8 },
];

export function visibleStats(): Stat[] {
  return STATS;
}
