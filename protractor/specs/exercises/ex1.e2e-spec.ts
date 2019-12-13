import { browser, element, by } from 'protractor';

describe('AcuteBlog App: Exercise 1', () => {
  it('should be a thing that does not implode', () => {
    // Visit the app
    browser.get('http://localhost:4201');

    // Make an assertion that the title of the landing page is 'Acute Blog'
    expect(true).toEqual(false);
  });
});
