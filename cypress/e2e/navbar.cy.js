describe ('Teste da Navbar', function () {

    beforeEach(function() {

        cy.visit('./index.html');
    });
    it ('Deve ter a classe .navegacaomenu', function () {
        /*cy.visit('/index.html');*/



        cy.get('nav').should('have.class','navegacaomenu');

    }) ;    
     it('Deve ter um atributo href válido para cada página', () => {

        cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
     });


});