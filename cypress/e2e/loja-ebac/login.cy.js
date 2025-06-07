//<reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
  });

    afterEach(() => {
        cy.screenshot()
    });

  it("Deve fazer login com sucesso ", () => {
    cy.get("#username").type('edson@2025.com.br');
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  });

  it("Deve exibir uma mensagen de erro ao inserir usuário inválido", () => {
    cy.get("#username").type("edson@20.com.br");
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
  });

  it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
    cy.get("#username").type("edson@2025.com.br");
    cy.get("#password").type("edsonnn");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should("exist");
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail edson@2025.com.br está incorreta. Perdeu a senha?')
  });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get("#username").type(perfil.usuario);
        cy.get("#password").type(perfil.senha);
        cy.get(".woocommerce-form > .button").click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados =>{
        cy.get("#username").type(dados.usuario);
        cy.get("#password").type(dados.senha ,);
        cy.get(".woocommerce-form > .button").click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        })
    });

    it('Deve fazer login com sucesso comando customizado', () => {
        cy.login('edson@2025.com.br', 'edson')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('exist')
        
      
    });
});
