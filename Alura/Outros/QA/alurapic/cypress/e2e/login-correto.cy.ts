describe("Página de login", () => {
  it("Preencher os campos do formulário corretamente para efetuar login", () => {
    cy.visit("http://localhost:4200/#/home");

    cy.get('[data-test="loginUserName"]').type("catarinap");
    cy.get('[data-test="loginPassword"]').type("catarina123");

    cy.contains("button", "login").click();
  });
});
