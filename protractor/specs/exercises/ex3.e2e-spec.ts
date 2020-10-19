import { SignupPage } from '@po/signup.po';
import { browser, logging, ExpectedConditions } from 'protractor';

describe('AcuteBlog App: Exercise 3', () => {
  // Define your signupPage

  beforeEach(() => {
    // new instance of signupPage before each run
  });

  it('should have a signup page', () => {
    // Make an assertion that the title of the signup page is 'Welcome to the party pal!'
  });

  it('should have a functioning signup form', () => {
    // Visit the appropriate page

    // Uh oh, what's up with that modal in the way?

    // Submit the form

    // Assert success based on tehh alert Dialog being present with a string containing 'Signup'

    // Let's be tidy and close the alert
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
