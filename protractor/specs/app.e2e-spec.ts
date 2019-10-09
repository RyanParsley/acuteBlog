import { AppPage } from '../pages/app.po';
import { LoginPage } from '../pages/login.po';
import { UserListPage } from '../pages/user-list.po';
import { browser, logging, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let loginPage: LoginPage;
  let userListPage: UserListPage;

  beforeEach(() => {
    page = new AppPage();
    loginPage = new LoginPage();
    userListPage = new UserListPage();
  });

  it('should default to a home page with a header', () => {
    // Make an assertion that the title of the landing page is 'Acute Blog'
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Acute Blog');
  });

  it('should have a login page', () => {
    // Make an assertion that the title of the login page is 'Welcome Back'
    // Hint: it's not the same page that we tested above

    loginPage.navigateTo();
    expect(loginPage.getTitleText()).toEqual('Welcome Back!');
  });

  it('should have a funtioning login form', () => {
    // Make an assertion that the title of the login page is 'Welcome Back'
    // Hint: it's not the same page that we tested above

    loginPage.navigateTo();
    loginPage.submitLogin('foo', 'bar');

    browser.wait(ExpectedConditions.alertIsPresent(), 5000);
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toContain('Login');
    alertDialog.accept();
  });

  it('should have a user-list page', () => {
    // Make an assertion that the title of the user-list page is 'Users'
    // Hint: it's not the same page that we tested above

    userListPage.navigateTo();
    expect(userListPage.getTitleText()).toEqual('Users');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
