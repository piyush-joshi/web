const puppeteer = require("puppeteer");

let config = {
   launchOptions: {
      headless: false
   }
};

async function e2e () {
   const browser = await puppeteer.launch(config.launchOptions);

   const page = await browser.newPage();
   await page.goto('http://localhost/thewayleicester.com/dist');
   await browser.close();
}

e2e();