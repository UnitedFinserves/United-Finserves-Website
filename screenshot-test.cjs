const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--window-size=1440,900'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => { if (msg.type() === 'error') console.log('ERR:', msg.text()); });

  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'F:/United Finserves Website/screenshot-home.png', fullPage: false });
  console.log('Home screenshot done');

  await page.goto('http://localhost:5175/emi-calculator', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'F:/United Finserves Website/screenshot-emi.png', fullPage: true });
  console.log('EMI screenshot done');

  await browser.close();
})();
