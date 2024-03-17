describe('Examples tests', () => {
  beforeEach(() => {
    cy.visit('/examples');
  });

  it('Multi-page testing', () => {
    cy.getDataTest('nav-why-cypress').click();
    cy.location('pathname').should('equal', '/');

    cy.getDataTest('nav-fundamentals').click();
    cy.location('pathname').should('equal', '/fundamentals');
  });

  it('Intercepts', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      fixture: 'example.json',
    });

    cy.getDataTest('post-btn').click();
  });

  it.only('Grudge list', () => {
    cy.contains(/add some grudges/i);

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0);
    });

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('some grudge');
    });

    cy.getDataTest('add-grudge-btn').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1);
    });
  });
});
