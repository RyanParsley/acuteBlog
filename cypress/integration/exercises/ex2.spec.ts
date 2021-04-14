/// <reference types="cypress" />

context('AcuteBlog App: Exercise 2', () => {
  it('should default to a home page with a header', () => {
    // Make an assertion that the title of the landing page is 'Acute Blog'
    cy.visit('http://localhost:4200');

    // Make an assertion that the title of the landing page is 'Acute Blog'
    cy.get('#header-title').contains('Acute Blog');
  });

  it('has a user-list page that should not be accessible to anonymous users', () => {
    // Make an assertion that the title of the user-list page is 'Users'
    // Hint: it's not the same page that we tested above
    cy.visit('http://localhost:4200/user');

    // assert you do not visit /user without permission
    cy.url().should('include', 'login');
  });

  it('should redirect unexpected links appropriately', () => {
    // visit a url that is not accounted for as a route
    cy.visit('http://localhost:4200/foo');

    // confirm you get a reasonable outcome
    cy.url().should('include', '404');
  });

  it('should have publically accessible list of posts', () => {
    cy.visit('http://localhost:4200/post');
    cy.url().should('include', 'post');
    cy.get('h3').contains('Posts');
  });
});
