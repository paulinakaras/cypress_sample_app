/// <reference types="cypress" /> 

describe("learn with local application setup", () => {
    before("visit Next.js MongoDB app home page", () => {
        cy.visit("http://localhost:3000"); 
    });

    it("check initial elements on home page screen", () => {
        cy.get(".Nav_logo__F5_LT").as("navigationMenuTitle");
        cy.get(".Hero_nextjs__ITLdD").as("nextJsMainTitle");
        cy.get(".Hero_mongodb__UtOPV").as("mongoDbMainTitle");
        cy.get(".Hero_title__vlAZq > :nth-child(3)").as("appMainTitle");
        cy.get(".Button_ghost__CCawS > span").as("logInButton");
        cy.get(".Nav_content__gPLQk > .Container_container__hwq37 > .Button_invert__E1Wqk > span").as("signUpButton");
        cy.get(":nth-child(1) > .Button_button__QHarr").as("exploreFeedButton");
        cy.get(":nth-child(3) > .Button_button__QHarr").as("gitHubButton");
        cy.get(".Hero_subtitle__gZIZW").as("descriptionText");
        cy.get("p.Text_text__1cTfE").as("footerText");
        cy.get(".ThemeSwitcher_select__cNL7P").as("footerButton");
            
        cy.get("@navigationMenuTitle").should("be.visible");
        cy.get("@nextJsMainTitle").should("be.visible");
        cy.get("@mongoDbMainTitle").should("be.visible");
        cy.get("@appMainTitle").should("be.visible");
        cy.get("@logInButton").should("be.visible");
        cy.get("@signUpButton").should("be.visible");
        cy.get("@exploreFeedButton").should("be.visible");
        cy.get("@gitHubButton").should("be.visible");
        cy.get("@descriptionText").should("be.visible");
        cy.get("@footerText").should("be.visible");
        cy.get("@footerButton").should("be.visible");
    });
});
