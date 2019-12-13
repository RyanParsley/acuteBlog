import { element, by, browser, logging } from 'protractor';

describe('AcuteBlog App: Exercise 2', () => {
  it('should default to a home page with a header', () => {
    // Make an assertion that the title of the landing page is 'Acute Blog'

  });

  it('has a user-list page that should not be accessible to anonymous users', () => {
    // Make an assertion that the title of the user-list page is not 'Users'
    // Hint: it's not the same page that we tested above

    // assert you do not visit /user without permission

  });

  it('should redirect unexpected links appropriately', () => {
    // visit a url that is not accounted for as a route

    // confirm you get a reasonable outcome

  });

  it('should have publically accessible list of posts', () => {

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser

    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
