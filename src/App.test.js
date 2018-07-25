import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { puppeteer } from 'puppeteer';

const puppeteer = require('puppeteer');

describe('App tests', () => {
  describe('unit tests', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
  
  describe('e2e tests', () => {
    it('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();
  
    page.emulate({
      viewport: {
      width: 500,
      height: 2400
      },
      userAgent: ''
    });
  
    await page.goto('http://localhost:3002/');
    await page.waitForSelector('.App-title');
  
    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('Welcome to React');
  
    browser.close();
    }, 16000);
  });
});


