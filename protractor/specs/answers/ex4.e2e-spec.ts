import { LoginPage } from '@po/login.po';
import { UserListPage } from '@po/user-list.po';
import { browser, logging, ExpectedConditions } from 'protractor';
import { login, logout } from '@utils/helpers';

describe('AcuteBlog App: Exercise 4', () => {
  let loginPage: LoginPage;
  let userListPage: UserListPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    userListPage = new UserListPage();
  });

  it('should have a login page', () => {
    // Make an assertion that the title of the login page is 'Welcome Back'
    // Hint: it's not the same page that we tested above

    loginPage.navigateTo();
    expect(loginPage.getTitleText()).toEqual('Welcome Back!');
  });

  it('should have a functioning login form', () => {
    login();
    const currentUser = browser.executeScript('return window.localStorage.getItem("currentUser");');
    expect(currentUser).toEqual('foo');
  });

  it('should have a user-list page', () => {
    // Make an assertion that the title of the user-list page is 'Users'
    // Hint: it's not the same page that we tested above
    login();

    userListPage.navigateTo();
    expect(userListPage.getTitleText()).toEqual('Users');
  });

  it('should have a list of users on the user-list page', () => {
    // Make an assertion that the title of the user-list page is 'Users'
    // Hint: it's not the same page that we tested above
    login();

    userListPage.navigateTo();

    expect(userListPage.getUserList().count()).toBeGreaterThanOrEqual(1);
  });

  afterEach(async () => {
    // Tidy up state after tests

    logout();

    // Assert that there are no errors emitted from the browser

    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
