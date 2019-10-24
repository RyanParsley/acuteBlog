import { AppPage } from '@po/app.po';
import { LoginPage } from '@po/login.po';
import { UserListPage } from '@po/user-list.po';
import { browser, logging, ExpectedConditions } from 'protractor';
import { loginFaster, logout } from '@utils/helpers';

describe('AcuteBlog App: Authenticated Suite', () => {
  let page: AppPage;
  let userListPage: UserListPage;

  beforeAll (() => {
    loginFaster();
  });

  beforeEach(() => {
    page = new AppPage();
    userListPage = new UserListPage();
  });

  it('should default to a home page with a header #smoke', () => {
    // Make an assertion that the title of the landing page is 'Acute Blog'

    page.navigateTo();
    expect(page.getTitleText()).toEqual('Acute Blog');
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
