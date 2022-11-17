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
        cy.get('#L2AGLb > .QS5gu').as("acceptAllButton"); //alias - zastępowanie niezrozumiałych nazwa na b.czytelne
        cy.get('.gLFyf').as("searchInput");

        cy.get('@acceptAllButton').click();
        cy.get('@searchInput').click().focused();
    });

    it("click on input field, type some text and click on the second result from search dropdown list", () => {
        cy.get('#L2AGLb > .QS5gu').as("acceptAllButton");
        cy.get('.gLFyf').as("searchInput");

        cy.get('@acceptAllButton').click();
        cy.get('@searchInput').click().focused();

        cy.get("@searchInput").type('dontWant');
        cy.get('.erkvQe > .OBMEnb > ul').as('dropdown');
        cy.get('@dropdown').should('be.visible');
        cy.get('@dropdown').contains('I Don\'t Want to Talk About It');
        cy.get('@dropdown').find('li').eq(1).contains('I Don\'t Want to Talk About It');

        cy.get('@dropdown').find('li').eq(1).click();
        cy.contains('I Don\'t Want to Talk About It'); //antypatrn powinno być cy.get('xx').contains('text') ograniczenie cypressa
    });

    it("click on input field, type some text and tap enter button", () => {
        cy.get('#L2AGLb > .QS5gu').as("acceptAllButton");
        cy.get('.gLFyf').as("searchInput");

        cy.get('@acceptAllButton').click();
        cy.get('@searchInput').click().focused();

        cy.get("@searchInput").type('dontWant {enter}');
        cy.contains('I Don\'t Want to');
    });

    it.skip("skipping test", () => {
        // skipping test
    })
});
