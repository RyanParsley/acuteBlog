import { browser, by, element, ElementFinder } from 'protractor';

export class SignupPage {

  readonly signupForm = {
    signupForm: element(by.id('authForm')),
    get name(): ElementFinder {
      return this.signupForm.$('[formcontrolname="username"]');
    },
    get password(): ElementFinder {
      return this.signupForm.$('[formcontrolname="password"]');
    },
    get submitButton(): ElementFinder {
      return this.signupForm.$('button[type=submit]');
    },
  };

  async submitLogin(name: string, password: string): Promise<any> {
    if (name) {
      await this.signupForm.name.clear();
      await this.signupForm.name.sendKeys(name);
    }
    if (password) {
      await this.signupForm.password.clear();
      await this.signupForm.password.sendKeys(password);
    }
    await this.signupForm.submitButton.click();
  }

  navigateTo() {
    return browser.get(`${browser.baseUrl}signup`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.mat-card-title')).getText() as Promise<string>;
  }

  dismissModal() {
    return element(by.buttonText('Ok')).click();
  }

}
