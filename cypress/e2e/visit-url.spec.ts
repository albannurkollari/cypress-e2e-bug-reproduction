const baseURL = "https://www.elkjop.no/";
const PLP_URL_1 = "https://www.elkjop.no/kundeservice/betalingslosninger/elkjop-gavekort";
const PLP_URL_2 = "https://www.elkjop.no/hvitevarer/vask-og-tork/kombinert-vaskemaskin-og-torketrommel";

describe("Visit an Elkjop URL", () => {
  // ✅ Works
  it("should visit this base URL", () => {
    cy.visit(baseURL);
    cy.location("href").should("equal", baseURL);
  });

  // ✅ Works
  it("should visit this specific URL", () => {
    cy.visit(PLP_URL_1);
    cy.location("href").should("equal", PLP_URL_1);
  });

  // ❌ Does not work
  it("should visit this other specific URL", async () => {
    cy.visit(PLP_URL_2);

    // Work around to throw the test if the assertion fails
    // If we just listen to the emitted event and throw from within
    // the test will still pass since the throw was isolated within the listener.
    const changedURL = await new Promise<string>((resolve) => {
      cy.on("url:changed", (changedURL: string) => {
        if (changedURL && changedURL !== PLP_URL_2) {
          resolve(changedURL);
        } else {
          setTimeout(() => resolve(PLP_URL_2), 4000);
        }
      });
    });
    const msg = `Expected URL to be "${PLP_URL_2}" but received "${changedURL}" instead!`;

    expect(changedURL).to.equal(PLP_URL_2, msg);
  });
});
