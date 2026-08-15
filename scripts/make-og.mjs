/**
 * Generates the social preview image as a static PNG.
 *
 * Why static: the card's content is identical on every page (mark, brand,
 * tagline, domain), so rendering it per-request through next/og bought us
 * nothing and cost us the whole feature - Satori could not parse the font it
 * fell back to and the route died with
 * "lookupType: 5 - substFormat: 3 is not yet supported", leaving every shared
 * link with a blank preview.
 *
 * Re-run after changing the tagline or the mark:
 *   node scripts/make-og.mjs           (needs the dev server on :3000 for the logo)
 */
import { chromium } from "playwright-core";
import { writeFileSync } from "node:fs";

const ORIGIN = process.env.OG_ORIGIN || "http://localhost:3000";

const HEADLINE = "Software that speaks every language your business does.";
const SUB =
  "ERP, CRM, POS, AI chatbots and automation. English, Urdu and Arabic, with real RTL.";
const DOMAIN = "ackermen.com";

const html = `<!doctype html>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 72px;
    background-color: #f4f2ec;
    background-image:
      linear-gradient(to right, rgba(21,23,28,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(21,23,28,0.06) 1px, transparent 1px);
    background-size: 72px 72px;
    color: #15171c;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .brand { display: flex; align-items: center; gap: 20px; }
  .brand img { width: 56px; height: 56px; }
  .brand span { font-size: 40px; font-weight: 700; letter-spacing: -0.5px; }
  h1 {
    font-size: 64px; font-weight: 700; line-height: 1.1;
    letter-spacing: -2px; max-width: 15ch;
  }
  h1 mark { background: none; color: #1637b8; }
  p { font-size: 26px; color: rgba(21,23,28,0.66); margin-top: 20px; max-width: 40ch; }
  .foot { display: flex; align-items: center; gap: 12px; font-size: 22px; color: #1637b8; }
  .dot { width: 12px; height: 12px; border-radius: 999px; background: #2b5bff; }
</style>
<div class="brand">
  <img src="${ORIGIN}/logo.png" alt="">
  <span>Ackerman</span>
</div>
<div>
  <h1>Software that speaks <mark>every language</mark> your business does.</h1>
  <p>${SUB}</p>
</div>
<div class="foot"><div class="dot"></div>${DOMAIN}</div>`;

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "networkidle" });
const buf = await page.screenshot({ type: "png" });
await browser.close();

// Written to public/ and referenced explicitly from layout metadata: the
// app-dir metadata file convention did not resolve from the [locale] segment.
for (const out of ["public/og.png"]) {
  writeFileSync(out, buf);
  console.log(`wrote ${out} (${(buf.length / 1024).toFixed(1)} KB)`);
}
console.log(`headline: ${HEADLINE}`);
