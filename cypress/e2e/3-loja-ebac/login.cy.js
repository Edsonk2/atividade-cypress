//<reference type="cypress"/>

describe('Funcionalidade: Login',()=>{

    beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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

    it('Deve ixibir uma mensagem de errro ao inserir senha inválida', () => {
         cy.get('#username').type('oliveira@gmail.com.br')
         cy.get('#password').type('edsonooo')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail oliveira@gmail.com.br está incorreta. Perdeu a senha?')
        
    });
})
