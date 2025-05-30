//<reference types="cypress"/>

describe('Funcionalidade: Login', () =>{

    beforeEach(() => {
           cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso',() =>{
        cy.get('#username').type('edsonz3@gmail.com.br')
        cy.get('#password').type('edson')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá, edsonz3 (não é edsonz3? Sair)")
    })
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('edsonz3hh@gmail.com.br')
        cy.get('#password').type('edson')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });   
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('edsonz3@gmail.com.br')
        cy.get('#password').type('edson55')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', "Erro: A senha fornecida para o e-mail edsonz3@gmail.com.br está incorreta. Perdeu a senha?")
        });
})