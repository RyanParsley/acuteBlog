import { browser, by, element, ElementFinder } from 'protractor';

export class PostEditPage {
  navigateTo(id: number) {
    return browser.get(`${browser.baseUrl}post/${id}/edit`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1.title')).getText() as Promise<string>;
  }
}
