//<reference types="cypress"/>

describe("Funcionalidade: Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("edson1@gmail.com");
    cy.get("#password").type("edson");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, edson1 (não é edson1? Sair)"
    );
  });
});
