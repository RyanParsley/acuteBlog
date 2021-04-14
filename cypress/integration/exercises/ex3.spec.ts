/// <reference types="cypress" />
describe('AcuteBlog App: Exercise 3', () => {
  it('should have a signup page', () => {
    cy.visit('http://localhost:4200/signup');
    cy.contains('Welcome to the party pal!');
  });

  it('should have a functioning signup form', () => {
    // Visit the appropriate page
    cy.visit('http://localhost:4200/signup');

    // Uh oh, what's up with that modal in the way?
    cy.contains('Ok').click();

    // Submit the form
    cy.get('[name="username"]').type('foo');
    cy.get('[name="password"]').type('bar');

    // Assert success based on the alert Dialog being present with a string containing 'Signup'
    const stub = cy.stub();
    cy.on ('window:alert', stub);

    cy.get('[type="submit"]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Signup form submitted!');
    });
  });
});
