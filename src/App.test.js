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
  let browser
  let page
  
  beforeAll(async () => { 
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    page.setViewport({ width: 500, height: 2400 });
  });

  afterAll(() => {     
    if (isDebugging()) {         
      browser.close();    
    } 
  });

  test('in first page, first pokemon is bulbasaur', async() => {
    const html = await page.$eval('.list-group-item:nth-child(1) > a', e => e.innerHTML);
    expect(html).toBe('bulbasaur');
    browser.close();
  }, 16000)
})