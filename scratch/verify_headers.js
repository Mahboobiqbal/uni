const { chromium } = require('C:/Users/adeel/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const path = require('path');

const outDir = path.join(__dirname, 'screenshots');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/adeel/AppData/Local/ms-playwright/chromium-1248/chrome-win64/chrome.exe',
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Department Chemistry
  await page.goto('http://localhost:3000/departments/chemistry', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outDir, 'dept_chemistry_full_header.png'), clip: { x: 0, y: 0, width: 1440, height: 450 } });

  // 2. Program BS Chemistry
  await page.goto('http://localhost:3000/programs/bs-chemistry', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outDir, 'prog_bs_chemistry_full_header.png'), clip: { x: 0, y: 0, width: 1440, height: 450 } });

  // 3. Department Botany
  await page.goto('http://localhost:3000/departments/botany', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outDir, 'dept_botany_full_header.png'), clip: { x: 0, y: 0, width: 1440, height: 450 } });

  // 4. Program Law
  await page.goto('http://localhost:3000/programs/ba-llb-law-and-shariah', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outDir, 'prog_law_full_header.png'), clip: { x: 0, y: 0, width: 1440, height: 450 } });

  await browser.close();
  console.log('HEADERS CAPTURED!');
})();
