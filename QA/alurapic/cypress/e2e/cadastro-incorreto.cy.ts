describe("Página de cadastro", () => {
  it("Preencher os campos do formulário de forma incorreta", () => {
    cy.visit("http://localhost:4200/#/home");
    cy.contains("a", "Register now").click();
    //dando duplo clique no botão register para poder exibir as mensagens de erro
    cy.contains("button", "Register").click();
    cy.contains("button", "Register").click();

    cy.contains("Email is required!").should("be.visible");
    cy.contains("Full name is required!").should("be.visible");
    cy.contains("User name is required!").should("be.visible");
    cy.contains("Password is required!").should("be.visible");
  });
});
