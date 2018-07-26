import puppeteer from 'puppeteer';

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'test' ? debugging_mode : {}
}

describe('list page', () => {
  let browser
  let page
  
  beforeEach(async () => { 
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    page.setViewport({ width: 500, height: 2400 });
  });

  afterEach(() => {     
    if (isDebugging()) {         
      browser.close();    
    } 
  });

  it('in first page, first pokemon is bulbasaur', async() => {
    const html = await page.$eval('.list-group-item:nth-child(1) > a', e => e.innerHTML);
    expect(html).toBe('bulbasaur');
  }, 16000);

  it('create an screenshot of bulbasaur detail', async() => {
    const html = await page.$eval('.list-group-item:nth-child(1) > a', e => e.innerHTML);
    await page.click('.list-group-item:nth-child(1) > a');
    await page.waitForSelector('div.card');
    await page.screenshot({path: 'screenshot.png'});
    expect(html).toBe('bulbasaur');
  }, 16000);

  it('after click 5 times next button, the last pokemon listed is staryu', async() => {
    await page.click('div.btn-group > button:nth-child(2)');
    await page.click('div.btn-group > button:nth-child(2)');
    await page.click('div.btn-group > button:nth-child(2)');
    await page.click('div.btn-group > button:nth-child(2)');
    await page.click('div.btn-group > button:nth-child(2)');

    const html = await page.$eval('.list-group-item:last-child > a', e => e.innerHTML);
    expect(html).toBe('staryu');
  }, 16000);

  it('go to detailed info about pikachu', async() => {
    await page.click('div.btn-group > button:nth-child(2)');
    await page.click('.list-group-item:nth-child(5) > a');
    await page.waitForSelector('div.card');

    const html = await page.$eval('div.card-body > h6', e => e.innerHTML);
    expect(html).toBe('Pokemon ID: 25');
  }, 16000);

})