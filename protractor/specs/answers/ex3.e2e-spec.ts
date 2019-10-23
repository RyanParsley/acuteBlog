import { SignupPage } from '@po/signup.po';
import { browser, logging, ExpectedConditions } from 'protractor';

describe('AcuteBlog App: Exercise 3', () => {
  // Define your signupPage
  let signupPage: SignupPage;

  beforeEach(() => {
    // new instance before each run
    signupPage = new SignupPage();
  });

  it('should have a signup page', () => {
    // Make an assertion that the title of the login page is 'Welcome Back'
    // Hint: it's not the same page that we tested above
    signupPage.navigateTo();
    expect(signupPage.getTitleText()).toEqual('Welcome to the party pal!');
  });

  it('should have a functioning signup form', () => {
    // Visit the appropriate page
    signupPage.navigateTo();

    // Uh oh, what's up with that modal in the way?
    signupPage.dismissModal();

    // Submit the form
    signupPage.submitLogin('foo', 'bar');

    // Assert success based on tehh alert Dialog being present with a string containing 'Signup'
    browser.wait(ExpectedConditions.alertIsPresent(), 5000);
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toContain('Signup');

    // Let's be tidy and close the alert
    alertDialog.accept();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
