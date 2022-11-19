/// <reference types="cypress" /> 

import { NAVIGATION_MENU, HOME_SCREEN, FOOTER } from '../constans/homePage.constans.js';
import { SIGN_UP_FORM } from '../constans/signupPage.constans.js';

describe("learn with local application setup", () => {
    let randomNumbers;
    let emailAddressInput;
    let usernameInput;

    before("generate credentials", () => {
        randomNumbers = Cypress._.random(0, 1e6);
        emailAddressInput = "ptester" + randomNumbers + "@gmail.com";
        usernameInput = "pTester" + randomNumbers;
    });

    beforeEach("visit Next.js MongoDB app home page", () => {
        cy.visit("http://localhost:3000");
    });

    it("check initial elements on home page screen", () => {
        cy.get(NAVIGATION_MENU.TITLE).should("be.visible");
        cy.get(NAVIGATION_MENU.LOGIN_IN_BUTTON).should("be.visible");
        cy.get(NAVIGATION_MENU.SIGN_UP_BUTTON).should("be.visible");
        cy.get(HOME_SCREEN.NEXT_JS_MAIN_TITLE).should("be.visible");
        cy.get(HOME_SCREEN.MONGODB_MAIN_TITLE).should("be.visible");
        cy.get(HOME_SCREEN.APP_MAIN_TITLE).should("be.visible");
        cy.get(HOME_SCREEN.EXPLORE_FEED_BUTTON).should("be.visible");
        cy.get(HOME_SCREEN.GITHUB_BUTTON).should("be.visible");
        cy.get(HOME_SCREEN.DESCRIPTION_TEXT).should("be.visible");
        cy.get(FOOTER.TEXT).should("be.visible");
        cy.get(FOOTER.BUTTON).should("be.visible");
    });

    it("user should be able to sign up", () => {
        cy.get(NAVIGATION_MENU.SIGN_UP_BUTTON).click();
        cy.get(SIGN_UP_FORM.EMAIL_ADDRESS_INPUT).click().type(emailAddressInput);
        cy.get(SIGN_UP_FORM.PASSWORD_INPUT).click().type("Test1234");
        cy.get(SIGN_UP_FORM.USERNAME_INPUT).click().type(usernameInput);
        cy.get(SIGN_UP_FORM.YOUR_NAME_INPUT).click().type("Paulina");
        cy.get(SIGN_UP_FORM.SIGN_UP_BUTTON).click();
    });
});
