//<reference types="cypress"/>

describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

    afterEach(() => {
        cy.screenshot()
    });

  it("Deve fazer login com sucesso ", () => {
    cy.get("#username").type("edson@2025.com.br");
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, edson-3224 (não é edson-3224? Sair)"
    );
  });

  it("Deve exibir uma mensagen de erro ao inserir usuário inválido", () => {
    cy.get("#username").type("edson@20.com.br");
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should("exist");
  });

  it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
    cy.get("#username").type("edson@2025.com.br");
    cy.get("#password").type("edsonnn");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: A senha fornecida para o e-mail edson@2025.com.br está incorreta. Perdeu a senha?"
    );
    cy.get(".woocommerce-error").should("exist");
  });
});
