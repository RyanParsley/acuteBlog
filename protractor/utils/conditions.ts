import { element, by, ExpectedConditions, browser, protractor, ElementFinder, ElementArrayFinder } from 'protractor';

const EC = protractor.ExpectedConditions;

export class Conditions {
  async get(url: string, urlName: string) {
    await browser.get(url);
    await browser
      .manage()
      .window()
      .maximize();
  }
}
