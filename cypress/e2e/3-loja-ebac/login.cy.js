//<reference types="cypress"/>

describe('Funcionalidade: Login', () =>{
    
    it('Deve fazer login com sucesso ', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('edson@2025.com.br')
        cy.get('#password').type('edson')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, edson-3224 (não é edson-3224? Sair)' )
    })
})