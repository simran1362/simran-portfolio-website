// Dev-only smoke check: serves nothing itself (expects the CRA build to be
// served on PORT), drives headless Chrome through the page, captures
// console errors and screenshots at key scroll stops in both themes.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const URL = process.env.TARGET_URL || 'http://127.0.0.1:3333';
const OUT = 'scripts/shots';
const EXE =
  process.env.BROWSER_EXE || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: EXE,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--force-device-scale-factor=1'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const errors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`[console.error] ${msg.text()}`);
});
page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`));
page.on('requestfailed', (req) =>
  errors.push(`[requestfailed] ${req.url()} :: ${req.failure()?.errorText}`),
);

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));

const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(`document height: ${docHeight}px`);

const stops = [0, 0.12, 0.25, 0.38, 0.5, 0.62, 0.75, 0.88, 0.985];
for (let i = 0; i < stops.length; i += 1) {
  const y = Math.floor((docHeight - 900) * stops[i]);
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
  await new Promise((r) => setTimeout(r, 1400));
  await page.screenshot({ path: `${OUT}/light-${String(i).padStart(2, '0')}.png` });
}

// Dark mode pass (hit the theme toggle via the DOM — puppeteer's hit-testing
// trips over the fixed-position FX layers).
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
await new Promise((r) => setTimeout(r, 600));
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button[aria-label="Toggle theme"]')].find(
    (b) => b.offsetParent !== null,
  );
  btn?.click();
});
await new Promise((r) => setTimeout(r, 800));
for (let i = 0; i < stops.length; i += 1) {
  const y = Math.floor((docHeight - 900) * stops[i]);
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: `${OUT}/dark-${String(i).padStart(2, '0')}.png` });
}

// Mobile pass (light).
await page.setViewport({ width: 390, height: 844 });
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button[aria-label="Toggle theme"]')].find(
    (b) => b.offsetParent !== null,
  );
  btn?.click();
});
await new Promise((r) => setTimeout(r, 1000));
const mobileHeight = await page.evaluate(() => document.documentElement.scrollHeight);
for (let i = 0; i < 5; i += 1) {
  const y = Math.floor(((mobileHeight - 844) * i) / 4);
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: `${OUT}/mobile-${String(i).padStart(2, '0')}.png` });
}

console.log(errors.length ? `ERRORS:\n${errors.join('\n')}` : 'NO CONSOLE/PAGE ERRORS');
await browser.close();
