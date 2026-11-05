describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/#/home");
  });
  it("Preencher os campos do formulário corretamente para efetuar login", () => {
    cy.login("gamora", "zenwhoberi");
  });
});
