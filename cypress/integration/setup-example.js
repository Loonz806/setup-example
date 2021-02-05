describe("the setup-example page", () => {
  describe("adding to the count", () => {
    it("afterclicking add to the count", () => {
      cy.visit("http://localhost:9000");
      cy.get("button:nth-child(2)").click();
      cy.get("p").should("have.text", "1");
      cy.get("button:nth-child(3)").click();
      cy.get("p").should("have.text", "0");
    });
  });
});
