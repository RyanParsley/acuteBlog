/// <reference types="cypress" />

context('AcuteBlog', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should be a thing that does not implode', () => {
    // Make an assertion that the title of the landing page is 'Acute Blog'
    cy.get('#header-title').contains('Acute Blog');
  });
});
