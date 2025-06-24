//<reference type="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',()=>{

    beforeEach(() => {
            cy.visit('minha-conta')
    });
      afterEach(() => {
        cy.screenshot()
      });  
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('oliveira@gmail.com.br')
        cy.get('#password').type('edson')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, oliveira (não é oliveira? Sair)')

    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
         cy.get('#username').type('oliveiraaaa@gmail.com.br')
         cy.get('#password').type('edson')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de errro ao inserir senha inválida', () => {
         cy.get('#username').type('oliveira@gmail.com.br')
         cy.get('#password').type('edsonooo')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail oliveira@gmail.com.br está incorreta. Perdeu a senha?')
        
    });

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, oliveira (não é oliveira? Sair)')

    });

     it('Deve fazer login com sucesso - usando Fixture', () => {
       cy.fixture('perfil').then(dados =>{
        cy.get('#username').type(dados.usuario , {log: false})
        cy.get('#password').type(dados.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

       })
    });

    it.only('Deve fazer login com sucesso - usando Comando customizado', () => {
      cy.login('oliveira@gmail.com.br', 'edson')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    });
})
