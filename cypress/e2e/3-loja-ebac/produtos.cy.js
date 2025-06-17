//<reference type="cypress"/>

describe('Funcionalidade: Produtos', () => {

    before(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
});
