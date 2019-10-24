import { browser, by, element, ElementFinder } from 'protractor';

export class PostCreatePage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}post/new`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1.title')).getText() as Promise<string>;
  }
}
