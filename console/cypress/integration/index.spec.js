
describe('Index Redirect Test', () => {
  it('redirects to /public', () => {
    cy.visit('/');

    cy.location('pathname')
      .should('eq', '/public')
  })
});
