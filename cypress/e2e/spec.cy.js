describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Checkout Empty Cart", () => {
    cy.findByRole("link", { name: /cart 0/i }).click();
    cy.findByRole("link", { name: /checkout/i }).should("not.exist");
  });

  it("search a product", () => {
    cy.findByRole("searchbox", {
      name: /search/i,
    })
      .focus()
      .clear();
    cy.get("input").type("Suit");
    cy.findByRole("button", { name: /add to cart/i }).click();
    cy.findByRole("link", { name: /cart 0/i }).click();
    cy.findByRole("link", { name: /checkout/i }).click();
  });
});
