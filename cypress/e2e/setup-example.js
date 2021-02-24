describe("the setup-example page", () => {
  // Now using Cypress/Testing-Library :)
  beforeEach(() => {
    // Load our app before starting each test case
    cy.visit("/");
  });

  it("loads the application", () => {
    cy.get("#root").should("exist");
    cy.percySnapshot("Page loaded");
  });

  it("should add to the count", () => {
    cy.findByText(/^0$/).should("have.text", "0");
    cy.findByText(/^\+$/).click();
    cy.findByText(/^1$/).should("have.text", "1");
    cy.percySnapshot("Addition assertion");
  });

  it("should subtract from the count", () => {
    cy.findByText(/^0$/).should("have.text", "0");
    cy.findByText(/^-$/).click();
    cy.findByText(/^-1$/).should("have.text", "-1");
    cy.percySnapshot("subtraction assertion");
  });
});
