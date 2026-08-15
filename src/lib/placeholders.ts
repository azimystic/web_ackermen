/**
 * One switch for every piece of unverified demo content on the site.
 *
 * The site was built with demo testimonials, demo case studies and demo
 * numbers so the design could be judged before the real material existed.
 * That content is useful in development and actively harmful in production:
 * the named clients do not exist, the quotes were never given, and the figures
 * were never measured. Publishing them misleads exactly the buyers the site is
 * meant to win, and marked-up invented reviews are a structured-data spam
 * violation on top.
 *
 * So: shown while developing, hidden once built for production. Each item is
 * released individually by making it real (see the per-item notes in
 * testimonials.ts, work.ts and stats.ts), not by flipping this switch.
 *
 * To preview a production build with the demo content visible, run with
 * NEXT_PUBLIC_SHOW_PLACEHOLDERS=1.
 */
export function showPlaceholders(): boolean {
  if (process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "1") return true;
  return process.env.NODE_ENV !== "production";
}
