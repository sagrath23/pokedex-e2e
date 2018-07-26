import puppeteer from 'puppeteer';
// const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

describe('list page', () => {
  test('in first page, first pokemon is bulbasaur', async() => {
    let browser = await puppeteer.launch({});
    let page = await browser.newPage();
    
    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    });
    await page.goto('http://localhost:3000/');
    const html = await page.$eval('.list-group-item:nth-child(1) > a', e => e.innerHTML);
    expect(html).toBe('bulbasaur');
    browser.close();
  }, 16000)
})