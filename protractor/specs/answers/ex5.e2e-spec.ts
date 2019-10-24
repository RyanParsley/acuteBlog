import { PostCreatePage } from '@po/post/post-create.po';
import { PostListPage } from '@po/post/post-list.po';
import { PostEditPage } from '@po/post/post-edit.po';
import { browser, logging } from 'protractor';
import { loginFaster, logout } from '@utils/helpers';

describe('AcuteBlog App: Exercise 5', () => {
  let postCreatePage: PostCreatePage;
  let postListPage: PostListPage;
  let postEditPage: PostEditPage;

  beforeAll(() => {
    loginFaster();
  });

  afterAll(() => {
    logout();
  });

  beforeEach(() => {
    postCreatePage = new PostCreatePage();
    postListPage = new PostListPage();
    postEditPage = new PostEditPage();
  });

  it('has a post list page with create post button for authenticated users', () => {
    logout();
    browser.navigate().refresh();
    expect(postListPage.addPostButton().isPresent()).toBe(false);

    loginFaster();
    expect(postListPage.addPostButton().isPresent()).toBe(true);
  });

  it('has a create post page for authenticated users', () => {
    // assert that you can visit the /post/new/
    postCreatePage.navigateTo();
    expect(postCreatePage.getTitleText()).toContain('Create');
  });

  it('has an edit post page for authenticated users', () => {
    // assert that you can visit the /post/1/edit
    postEditPage.navigateTo(1);
    expect(postEditPage.getTitleText()).toContain('Edit');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
