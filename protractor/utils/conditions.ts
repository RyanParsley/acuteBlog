import { ExpectedConditions, browser } from 'protractor';

export class Conditions {
  async get(url: string, urlName: string) {
    await browser.get(url);
    await browser
      .manage()
      .window()
      .maximize();
  }
}
