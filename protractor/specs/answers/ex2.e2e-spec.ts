import { element, by, browser, logging } from 'protractor';

describe('AcuteBlog App: Exercise 2', () => {
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
    // Assert that there are no errors emitted from the browser

    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
