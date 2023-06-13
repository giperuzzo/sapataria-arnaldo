describe('Teste na Home', () => {
  it('Abre a pagina', () => {
    cy.visit('/index.html')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('titulo da pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('body').click();
    /* ==== End Cypress Studio ==== */
  });
})