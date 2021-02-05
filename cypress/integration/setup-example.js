describe("the setup-example page", () => {
  beforeEach(() => {
    // Load our app before starting each test case
    cy.visit("http://localhost:9000");
  });

  it("loads the application", () => {
    cy.get("#root").should("exist");
    cy.percySnapshot("Page loaded");
  });

  it("should add to the count", () => {
    cy.get("p").should("have.text", "0");
    cy.get("button:nth-child(2)").click();
    cy.get("p").should("have.text", "1");
    cy.percySnapshot("Addition assertion");
  });

  it("should subtract from the count", () => {
    cy.get("p").should("have.text", "0");
    cy.get("button:nth-child(3)").click();
    cy.get("p").should("have.text", "-1");
    cy.percySnapshot("subtraction assertion");
  });
});
