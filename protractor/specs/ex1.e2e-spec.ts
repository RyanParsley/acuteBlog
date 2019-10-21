import { browser, element, by } from 'protractor';

describe('AcuteBlog App', () => {
  it('should be a thing that does not impload', () => {
    // Visit the app
    browser.get('http://localhost:4201');

    // Make an assertion that the title of the landing page is 'Acute Blog'
    const title = element(by.css('#header-title'));
    expect(title.getText()).toEqual('Acute Blog');
  });
});
