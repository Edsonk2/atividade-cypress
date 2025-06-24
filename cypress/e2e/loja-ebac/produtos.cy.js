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

    it('Deve buscar um produto  com sucesso', () => {
        let produto = 'Helena Hooded Fleece'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga pant')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('l','red', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

      it.only('Deve adicionar produto ao carrinho buscando a massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
        produtosPage.buscarProduto(dados[2].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[2].tamanho, 
            dados[2]. cor,
            dados[2].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })

    });
});
