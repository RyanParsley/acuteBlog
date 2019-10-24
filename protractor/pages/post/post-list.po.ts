import { browser, by, element, ElementFinder } from 'protractor';

export class PostListPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}post`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h3')).getText() as Promise<string>;
  }

  addPostButton() {
    return element(by.css('[href="/post/new"]')) as ElementFinder;
  }
}
