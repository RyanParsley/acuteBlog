import { AppPage } from '../pages/app.po';
import { LoginPage } from '../pages/login.po';
import { UserListPage } from '../pages/user-list.po';
import { element, by, browser, logging, ExpectedConditions } from 'protractor';
import { login, logout } from '../utils/helpers';

describe('AcuteBlog App: Exercise 2', () => {
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
    browser.get('http://localhost:4201');

    // Make an assertion that the title of the landing page is 'Acute Blog'
    const title = element(by.css('#header-title'));
    expect(title.getText()).toEqual('Acute Blog');
  });

  it('user-list page should not be accessible', () => {
    // Make an assertion that the title of the user-list page is 'Users'
    // Hint: it's not the same page that we tested above
    browser.get('http://localhost:4201/user');

    // assert you do not visit /user without permission
    expect(browser.getCurrentUrl()).toContain('login');
  });

  it('should redirect unexpected links appropriately', () => {
    // visit a url that is not accounted for as a route
    browser.get('http://localhost:4201/foo');

    // confirm you get a reasonable outcome
    expect(browser.getCurrentUrl()).toContain('404');
  });

  it('should have publically accessible post list', () => {
    browser.get('http://localhost:4201/post');
    expect(browser.getCurrentUrl()).toContain('post');

    const title = element(by.css('h3'));
    expect(title.getText()).toEqual('Posts');
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
