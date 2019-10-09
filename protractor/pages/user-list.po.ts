import { browser, by, element } from 'protractor';

export class UserListPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/user`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.mat-card-title h3')).getText() as Promise<string>;
  }
}
