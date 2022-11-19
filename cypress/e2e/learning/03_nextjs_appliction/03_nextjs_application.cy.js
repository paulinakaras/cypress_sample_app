/// <reference types="cypress" /> 

import * as homePage from './constans/homePage.constans.js';

describe("learn with local application setup", () => {
    beforeEach("visit Next.js MongoDB app home page", () => {
        cy.visit("http://localhost:3000"); 
    });

    it("check initial elements on home page screen", () => {
        cy.get(homePage.NAVIGATION_MENU_TITLE).should("be.visible");
        cy.get(homePage.NEXT_JS_MAIN_TITLE).should("be.visible");
        cy.get(homePage.MONGODB_MAIN_TITLE).should("be.visible");
        cy.get(homePage.APP_MAIN_TITLE).should("be.visible");
        cy.get(homePage.LOGIN_IN_BUTTON).should("be.visible");
        cy.get(homePage.SIGN_UP_BUTTON).should("be.visible");
        cy.get(homePage.EXPLORE_FEED_BUTTON).should("be.visible");
        cy.get(homePage.GITHUB_BUTTON).should("be.visible");
        cy.get(homePage.DESCRIPTION_TEXT).should("be.visible");
        cy.get(homePage.FOOTER_TEXT).should("be.visible");
        cy.get(homePage.FOOTER_BUTTON).should("be.visible");
    });

    it("user should be able to sign up", () => {
        cy.get(homePage.SIGN_UP_BUTTON).click();
    });
});