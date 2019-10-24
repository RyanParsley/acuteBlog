import { PostCreatePage } from '@po/post/post-create.po';
import { by, element, browser, logging, ExpectedConditions } from 'protractor';
import { login, logout } from '@utils/helpers';

describe('AcuteBlog App: Exercise 5', () => {
  let postCreatePage: PostCreatePage;

  beforeEach(() => {
    postCreatePage = new PostCreatePage();
  });

  it('has a post list page with create post button for authenticated users', () => {
    // visit post-list

    // Add Post button should be hidden until you log in, assert that it is

    // log in

    // Add post button should be visible now that you're logged in, assert that it is
  });

  it('has a create post page for authenticated users', () => {
    // log in

    // assert that you can visit the /post/new/

  });

  it('has an edit post page for authenticated users', () => {
    // log in

    // assert that you can visit the /post/1/edit

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
