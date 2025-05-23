//<reference types="cypress"/>

describe("Funcionalidade: Login", () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    });
        afterEach(() => {
            cy.screenshot()
        });

  it("Deve fazer login com sucesso", () => {
    cy.get("#username").type("edson1@gmail.com");
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, edson1 (não é edson1? Sair)"
    );
  });

  it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
    cy.get("#username").type("ed@gmail.com");
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();
    cy.get('.woocommerce-error > li').should('exist')
  });

  it('Deve exibir uma mensagem de erro ao inserir senha iválida', () => {
    cy.get("#username").type("edson1@gmail.com");
    cy.get("#password").type("edson12121");
    cy.get(".woocommerce-form > .button").click();
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail edson1@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error > li').should('exist')
  });


});
