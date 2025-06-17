//<reference type="cypress"/>

import produtosPage from "../../support/page-objects/produtos-page";

describe('Funcionalidade: Produtos', () => {

    before(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it.only('Deve buscar um produto  com sucesso', () => {
        let produto = 'Helena Hooded Fleece'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página com sucesso', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});
