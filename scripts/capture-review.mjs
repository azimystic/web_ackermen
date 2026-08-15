/**
 * Review-capture script: full-page screenshots at true document height with
 * reduced motion forced, so IntersectionObserver reveals and count-ups render
 * settled. Uses the system Chrome via playwright-core (no browser download).
 *
 * Usage: node scripts/capture-review.mjs [baseUrl]
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] || "http://localhost:3001";
const OUT = ".impeccable/review";

const SHOTS = [
  // Viewport set — real motion state, captured after fonts + entrance settle.
  { file: "desktop.png", url: "/", width: 1440, height: 900, full: false, motion: true },
  { file: "mobile.png", url: "/", width: 390, height: 844, full: false, motion: true },
  { file: "user-1280.png", url: "/", width: 1280, height: 720, full: false, motion: true },
  { file: "desktop-full.png", url: "/", width: 1440, height: 900, full: true },
  { file: "services-full.png", url: "/services", width: 1440, height: 900, full: true },
  { file: "industries-full.png", url: "/industries", width: 1440, height: 900, full: true },
  { file: "pricing-full.png", url: "/pricing", width: 1440, height: 900, full: true },
  { file: "work.png", url: "/work", width: 1440, height: 900, full: true },
  { file: "kampus-case-full.png", url: "/work/kampus", width: 1440, height: 900, full: true },
  { file: "testimonials-full.png", url: "/testimonials", width: 1440, height: 900, full: true },
  { file: "contact.png", url: "/contact", width: 1440, height: 900, full: true },
  { file: "about-full.png", url: "/about", width: 1440, height: 900, full: true },
  { file: "ar-home-full.png", url: "/ar", width: 1440, height: 900, full: true },
  { file: "ur-home-full.png", url: "/ur", width: 1440, height: 900, full: true },
  { file: "mobile-full.png", url: "/", width: 390, height: 844, full: true },
  { file: "ar-mobile-full.png", url: "/ar", width: 390, height: 844, full: true },
];

const browser = await chromium.launch({ channel: "chrome", headless: true });

for (const shot of SHOTS) {
  const ctx = await browser.newContext({
    viewport: { width: shot.width, height: shot.height },
    reducedMotion: shot.motion ? "no-preference" : "reduce",
  });
  const page = await ctx.newPage();
  await page.goto(`${BASE}${shot.url}`, { waitUntil: "networkidle" });
  if (shot.motion) {
    // Let fonts resolve and the entrance sequence finish before capturing.
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(2200);
  }
  // Force lazy images eager and walk the page so everything paints.
  await page.evaluate(async () => {
    document
      .querySelectorAll('img[loading="lazy"]')
      .forEach((img) => (img.loading = "eager"));
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${shot.file}`, fullPage: shot.full });
  console.log(`captured ${shot.file}`);
  await ctx.close();
}

await browser.close();
