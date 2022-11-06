/// <reference types="cypress" />

describe("interacting with input field", () => {
    beforeEach(() => {
        cy.visit("https://google.com");
    })
    
    it("click on input field - consts", () => {
        const acceptAllButton = '#L2AGLb > .QS5gu';
        const searchInput = '.gLFyf';

        cy.get(acceptAllButton).click();
        cy.get(searchInput).click().focused();
    });

    it("click on input field - aliases", () => {
        cy.get('#L2AGLb > .QS5gu').as("acceptAllButton");
        cy.get('.gLFyf').as("searchInput");

        cy.get('@acceptAllButton').click();
        cy.get('@searchInput').click().focused();
    });
});
