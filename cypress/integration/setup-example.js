describe("the setup-example page", () => {
  it("can asset true to be true", () => {
    cy.visit("https://loonz806.github.io/setup-example/");
    expect(true).to.equal(true);
  });
});
