import { ExpectedConditions, browser } from 'protractor';
import { LoginPage } from '../pages/login.po';

const loginPage = new LoginPage();

export function login() {
  // Make an assertion that the title of the login page is 'Welcome Back'
  // Hint: it's not the same page that we tested above

  loginPage.navigateTo();
  loginPage.submitLogin('foo', 'bar');

  browser.wait(ExpectedConditions.alertIsPresent(), 5000);

  const alertDialog = browser.switchTo().alert();

  expect(alertDialog.getText()).toContain('Login');
  alertDialog.accept();
}

export function logout() {
  // We'll want to start with a clean slate more often than not
  browser.executeScript('window.sessionStorage.clear();');
  browser.executeScript('window.localStorage.clear();');
}

