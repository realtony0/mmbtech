import { chromium } from "playwright";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "projects");

const sites = [
  { id: "crocksdkr", url: "https://www.crocksdkr.com" },
  { id: "healthy", url: "https://www.healthy.sn" },
  { id: "hotgyaal", url: "https://www.hotgyaal.com" },
];

async function run() {
  const browser = await chromium.launch();

  for (const site of sites) {
    console.log(`Capturing ${site.id}...`);
    try {
      // Desktop screenshot
      const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      const desktopPage = await desktopCtx.newPage();
      await desktopPage.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
      await desktopPage.waitForTimeout(2000);
      await desktopPage.screenshot({ path: join(outDir, `${site.id}-desktop.png`), type: "png" });
      await desktopCtx.close();

      // Mobile screenshot
      const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
      const mobilePage = await mobileCtx.newPage();
      await mobilePage.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
      await mobilePage.waitForTimeout(2000);
      await mobilePage.screenshot({ path: join(outDir, `${site.id}-mobile.png`), type: "png" });
      await mobileCtx.close();

      console.log(`  Done: ${site.id}`);
    } catch (e) {
      console.error(`  Error for ${site.id}:`, e.message);
    }
  }

  await browser.close();
  console.log("All screenshots captured!");
}

run();
