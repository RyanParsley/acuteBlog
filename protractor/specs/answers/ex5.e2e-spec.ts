import { PostCreatePage } from '@po/post/post-create.po';
import { PostListPage } from '@po/post/post-list.po';
import { PostEditPage } from '@po/post/post-edit.po';
import { by, element, browser, logging, ExpectedConditions } from 'protractor';
import { login, logout } from '@utils/helpers';

describe('AcuteBlog App: Exercise 5', () => {
  let postCreatePage: PostCreatePage;
  let postListPage: PostListPage;
  let postEditPage: PostEditPage;

  beforeEach(() => {
    postCreatePage = new PostCreatePage();
    postListPage = new PostListPage();
    postEditPage = new PostEditPage();
  });

  it('should have a post list page with create post button for authenticated users', () => {
    // visit post-list
    postListPage.navigateTo();

    // Add Post button should be hidden until you log in, assert that it is
    expect(postListPage.addPostButton().isPresent()).toBe(false);

    // log in
    login();

    // Add post button should be visible now that you're logged in, assert that it is
    expect(postListPage.addPostButton().isPresent()).toBe(true);
  });

  it('should create post access for authenticated users', () => {
    // log in
    login();

    // assert that you can visit the /post/new/
    postCreatePage.navigateTo();
    expect(postCreatePage.getTitleText()).toContain('Create');

  });

  it('should allow editing of posts', () => {
    // log in
    login();

    // assert that you can visit the /post/1/edit
    postEditPage.navigateTo(1);
    expect(postEditPage.getTitleText()).toContain('Edit');
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
