/// <reference types="cypress" /> 

describe("learn with local application setup", () => {
    it("visit Next.js MongoDB app home page", () => {
        cy.visit("http://localhost:3000"); 
    });
});
