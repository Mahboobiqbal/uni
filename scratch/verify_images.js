const { chromium } = require('C:/Users/adeel/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/adeel/AppData/Local/ms-playwright/chromium-1248/chrome-win64/chrome.exe',
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('1. Loading Home page...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 1. Academic Showcase
  console.log('2. Testing AcademicShowcase tabs...');
  const showcase = page.locator('#faculties-programs');
  await showcase.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  // Tab 1: Computing
  await showcase.screenshot({ path: path.join(outDir, 'academic_showcase_01_computing.png') });

  // Tab 2: Sciences
  await showcase.getByRole('button', { name: /02 Sciences/ }).click();
  await page.waitForTimeout(400);
  await showcase.screenshot({ path: path.join(outDir, 'academic_showcase_02_sciences.png') });

  // Tab 3: Management
  await showcase.getByRole('button', { name: /03 Management Sciences/ }).click();
  await page.waitForTimeout(400);
  await showcase.screenshot({ path: path.join(outDir, 'academic_showcase_03_management.png') });

  // Tab 4: Law
  await showcase.getByRole('button', { name: /04 Law/ }).click();
  await page.waitForTimeout(400);
  await showcase.screenshot({ path: path.join(outDir, 'academic_showcase_04_law.png') });

  // Tab 5: Humanities
  await showcase.getByRole('button', { name: /05 Humanities/ }).click();
  await page.waitForTimeout(400);
  await showcase.screenshot({ path: path.join(outDir, 'academic_showcase_05_humanities.png') });

  // 2. Campus Life Heritage on Home
  console.log('3. Capturing Campus Life Heritage on Home...');
  const campusLife = page.locator('section:has-text("Campus Life & Heritage")');
  if (await campusLife.count() > 0) {
    await campusLife.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await campusLife.screenshot({ path: path.join(outDir, 'home_campus_life_heritage.png') });
  }

  // 3. Departments: Chemistry
  console.log('4. Testing Department: Chemistry...');
  await page.goto('http://localhost:3000/departments/chemistry', { waitUntil: 'networkidle' });
  const deptHero = page.locator('header').first();
  await deptHero.screenshot({ path: path.join(outDir, 'dept_chemistry_hero.png') });

  // 4. Programs: BS Chemistry
  console.log('5. Testing Program: BS Chemistry...');
  await page.goto('http://localhost:3000/programs/bs-chemistry', { waitUntil: 'networkidle' });
  const progHero = page.locator('header').first();
  await progHero.screenshot({ path: path.join(outDir, 'prog_bs_chemistry_hero.png') });

  // 5. About: Founding statement
  console.log('6. Testing About page...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  const founding = page.locator('#founding');
  await founding.scrollIntoViewIfNeeded();
  await founding.screenshot({ path: path.join(outDir, 'about_founding_banner.png') });

  // 6. Research: Discovery band
  console.log('7. Testing Research page...');
  await page.goto('http://localhost:3000/research', { waitUntil: 'networkidle' });
  const discovery = page.locator('#discovery');
  await discovery.scrollIntoViewIfNeeded();
  await discovery.screenshot({ path: path.join(outDir, 'research_discovery_banner.png') });

  // 7. Campus Life page
  console.log('8. Testing Campus Life page...');
  await page.goto('http://localhost:3000/campus-life', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outDir, 'campus_life_page.png'), fullPage: false });

  await browser.close();
  console.log('ALL VERIFICATION SCREENSHOTS CAPTURED SUCCESSFULLY!');
})();
