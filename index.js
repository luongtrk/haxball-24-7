const puppeteer = require('puppeteer');
const fs = require('fs');

const botCode = fs.readFileSync('./codehaxball.js', 'utf8');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto('https://www.haxball.com/headless', {
    waitUntil: 'networkidle2'
  });

  await page.evaluate(botCode => {
    eval(botCode);
  }, botCode);

  console.log("✅ Room Haxball đã được khởi động");
})();
