import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Проверка popovera', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 500,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Клик по кнопке должен отобразить popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('[data-toggle="popover"]');
    button.click();
    await page.waitFor('[data-section="popover"]');
  });
});
