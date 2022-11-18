/// <reference types="cypress" /> 
//po wpisaniu cy. (obiekt cypressowy) pojawią się dostępne metody

describe("learn about locators", () => {
    before("visit google home page", () => {
        cy.visit("https://google.com"); //otwarcie strony którą będę testować
    });

    it("can locate a button on a page", () => {
        cy.get('.gLFyf') // lokators - metody polegające na wyszukiwaniu elementów
            .should("be.empty") //weryfikacja/ sprawdzanie wyszukanego elementów
            .and("be.visible");
    });
});
