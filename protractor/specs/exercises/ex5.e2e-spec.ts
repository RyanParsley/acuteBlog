import { PostCreatePage } from '@po/post/post-create.po';
import { by, element, browser, logging, ExpectedConditions } from 'protractor';
import { login, logout } from '@utils/helpers';

describe('AcuteBlog App: Exercise 5', () => {
  let postCreatePage: PostCreatePage;

  beforeEach(() => {
    postCreatePage = new PostCreatePage();
  });

  it('should create post access for authenticated users', () => {
  });

  afterEach(async () => {
    // Tidy up state after tests

    // Assert that there are no errors emitted from the browser

    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
