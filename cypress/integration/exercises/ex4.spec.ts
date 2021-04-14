describe('AcuteBlog App: Exercise 4', () => {
  it('should have a login page', () => {
    // Make an assertion that the title of the login page is 'Welcome Back'
    // Hint: it's not the same page that we tested above

    cy.visit('http://localhost:4200/login');
    cy.contains('Welcome Back!');
  });

  it('should have a functioning login form', () => {
    // Submit the form
    cy.get('[name="username"]').type('foo');
    cy.get('[name="password"]').type('bar');
    cy.get('[type="submit"]').click();


    const currentUser = browser.executeScript('return window.localStorage.getItem("currentUser");');
    expect(currentUser).toEqual('someUser');
  });

  it('should have a user-list page', () => {
    // Make an assertion that the title of the user-list page is 'Users'
    // Hint: it's not the same page that we tested above
    login();

    userListPage.navigateTo();
    expect(userListPage.getTitleText()).toEqual('Users');
  });

  it('should have a list of users on the user-list page', () => {
    // Make an assertion about the list of users on this page
    login();

    userListPage.navigateTo();

    expect(userListPage.getUserList().count()).toBeGreaterThanOrEqual(1);
  });

  afterEach(async () => {
    // Tidy up state after tests
    logout();
  });
});
