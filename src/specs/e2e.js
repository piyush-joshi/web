const puppeteer = require("puppeteer");
const serverUrl = "ENTER SERVER URL HERE";

let config = {
   launchOptions: {
      headless: false
   }
};

function getServerUrl () {
   return getServerUrl();
}

async function e2e () {
   const browser = await puppeteer.launch(config.launchOptions);

   const page = await browser.newPage();
   await page.goto(`${getServerUrl()}/dist`);

   // Call tests here
   
   await browser.close();
}

e2e();