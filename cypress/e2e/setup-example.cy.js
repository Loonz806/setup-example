import "cypress-axe";

describe("the setup-example page", () => {
  // Define at the top of the spec file or just import it
  function terminalLog(violations) {
    cy.task(
      "log",
      `${violations.length} accessibility violation${
        violations.length === 1 ? "" : "s"
      } ${violations.length === 1 ? "was" : "were"} detected`,
    );
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length,
      }),
    );

    cy.task("table", violationData);
  }
  // Now using Cypress/Testing-Library :)
  beforeEach(() => {
    // Load our app before starting each test case
    cy.visit("/");
    cy.injectAxe();
  });
  it("Has no detectable a11y violations on load (filtering to only include critical impact violations)", () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog,
    );
  });

  // Basic usage after interacting with the page
  it("loads the application", () => {
    cy.get("#root").should("exist");
    cy.findByText(/^0$/).should("be.visible");
    cy.findByText(/^\+$/).should("be.visible");
    cy.findByText(/^-$/).should("be.visible");
    cy.percySnapshot("Page loaded");
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog,
    );
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
