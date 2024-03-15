import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describe("Página de cadastro", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/#/home");
  });

  it("Preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    // cy.contains("a", "Register now").click();
    // // cy.get('[data-test="email"]').type("catarina@email.com.br");
    // // cy.get('[data-test="fullName"]').type("Catarina Pessoa");
    // // cy.get('[data-test="registerUserName"]').type("catarinap");
    // // cy.get('[data-test="registerPassword"]').type("catarina123");
    // cy.contains("button", "Register").click();

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  });
});
