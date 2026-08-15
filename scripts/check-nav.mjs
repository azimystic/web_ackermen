/**
 * Regression check for the "content only shows after a hard reload" bug:
 * loads the home page, performs a CLIENT-SIDE navigation by clicking nav
 * links, and asserts that each destination page's .reveal blocks actually
 * become visible without a reload.
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] || "http://localhost:3000";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

let failures = 0;

async function report(label) {
  // walk the page so every reveal enters the viewport
  await page.evaluate(async () => {
    // Half-viewport steps so staggered grids get time to fire.
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 180));
    }
  });
  await page.waitForTimeout(900);
  const r = await page.evaluate(() => ({
    path: location.pathname,
    total: document.querySelectorAll(".reveal").length,
    visible: document.querySelectorAll(".reveal.is-visible").length,
  }));
  const ok = r.total === 0 || r.visible === r.total;
  if (!ok) failures++;
  console.log(
    `${ok ? "PASS" : "FAIL"}  ${label.padEnd(28)} ${r.path.padEnd(18)} ${r.visible}/${r.total} revealed`
  );
}

await page.goto(BASE, { waitUntil: "networkidle" });
await report("initial load (/)");

// Services and Industries are dropdown triggers: open, then take the
// overview link inside. The rest are plain links.
for (const [name, viaMenu] of [
  ["Services", true],
  ["Industries", true],
  ["Work", false],
  ["Pricing", false],
  ["About", false],
  ["Contact", false],
]) {
  if (viaMenu) {
    await page.hover(`header nav .mega__trigger:text-is("${name}")`);
    await page.waitForSelector(".mega__panel", { timeout: 5000 });
    await page.click(".mega__panel .mega__overview");
  } else {
    await page.click(`header nav a:text-is("${name}")`);
  }
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(300);
  await report(`client-side nav → ${name}`);
}

// and back home, still client-side
await page.click("header a.nav__brand");
await page.waitForLoadState("networkidle");
await report("client-side nav → home");

await browser.close();
console.log(failures === 0 ? "\nALL PASS" : `\n${failures} FAILING`);
process.exit(failures === 0 ? 0 : 1);
