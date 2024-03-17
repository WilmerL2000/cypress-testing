describe('Form tests', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('Test subscribe form', () => {
    cy.contains(/testing forms/i);
    cy.getDataTest('subscribe-form').find('input').type('wilmer@gmail.com');
    cy.contains(/Successfully subbed: wilmer@gmail.com!/i).should('not.exist');
    cy.getDataTest('subscribe-btn').click();
    cy.contains(/Successfully subbed: wilmer@gmail.com!/i).should('exist');
    cy.wait(3000);

    cy.contains(/Successfully subbed: wilmer@gmail.com!/i).should('not.exist');
  });
});
