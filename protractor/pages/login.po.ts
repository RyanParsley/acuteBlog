import { browser, by, element, ElementFinder } from 'protractor';

export class LoginPage {

  readonly loginForm = {
    loginForm: element(by.id('loginForm')),
    get name(): ElementFinder {
      return this.loginForm.$('[formcontrolname="username"]');
    },
    get password(): ElementFinder {
      return this.loginForm.$('[formcontrolname="password"]');
    },
    get submitButton(): ElementFinder {
      return this.loginForm.$('button[type=submit]');
    },
  };

  async submitLogin(name: string, password: string): Promise<any> {
    if (name) {
      await this.loginForm.name.sendKeys(name);
    }
    if (password) {
      await this.loginForm.name.sendKeys(password);
    }
    await this.loginForm.submitButton.click();
  }

  navigateTo() {
    return browser.get(`${browser.baseUrl}/login`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.mat-card-title')).getText() as Promise<string>;
  }
}
