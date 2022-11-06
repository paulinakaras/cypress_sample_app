/// <reference types="cypress" />

describe("learn about locators", () => {
    it("visit google home page", () => {
        cy.visit("https://google.com");
    });

    it("can locate a button on a page", () => {
        cy.get('.gLFyf')
            .should("be.empty")
            .and("be.visible");
    });
});
