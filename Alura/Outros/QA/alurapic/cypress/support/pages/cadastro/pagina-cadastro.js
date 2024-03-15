const el = require("./elements").ELEMENTS;

class Cadastro {
  acessarPaginaDeCadastro() {
    cy.visit("http://localhost:4200/");
    cy.get('[data-test="register"]').click();
  }

  preencherFormulario() {
    cy.get('[data-test="email"]').type("catarina@email.com.br");
    cy.get('[data-test="fullName"]').type("Catarina Pessoa");
    cy.get('[data-test="registerUserName"]').type("catarinap");
    cy.get('[data-test="registerPassword"]').type("catarina123");
  }

  submeterCadastro() {
    cy.get('[data-test="btnRegister"]').click();
  }
}

export default new Cadastro();
