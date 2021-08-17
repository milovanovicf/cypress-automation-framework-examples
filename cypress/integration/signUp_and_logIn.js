/// <reference types="cypress" />

describe("Testing correct login automation via ultimateQa", () => {
  let randomString = Math.random().toString(36).substring(2);
  let email = "email_" + randomString + "@gmail.com";
  let password = "Password1";
  beforeEach(() => {});
  it("Testing correct Sign Up", () => {
    cy.baseUrlVisit();
    cy.get("a").contains("Create a new account").click();
    cy.get(".form__label").contains("First Name").type(randomString);
    cy.get(".form__label").contains("Last Name").type(randomString);
    cy.get(".form__group").contains("Email").type(email);
    cy.get(".form__group").contains("Password").type(password);
    cy.get("[type=checkbox]").click();
    cy.get("[type=submit]").click();
    cy.pause(); //Sometimes it will ask for a capcha confirm, when you manually fill it out press Resume or press C
    cy.logInPageAssertion();
  });
  it("Testing correct Log In", () => {
    cy.baseUrlVisit();
    cy.correctLogin();
    cy.pause(); //Sometimes it will ask for a capcha confirm, when you manually fill it out press Resume or press C
    cy.logInPageAssertion();
  });
  it("Testig the search bar ", () => {
    cy.baseUrlVisit();
    cy.correctLogin();
    cy.pause(); //Sometimes it will ask for a capcha confirm, when you manually fill it out press Resume or press C
    cy.get('[type="search"]').type("cypress");
    cy.get(".form__control").type("{enter}");
    cy.get(".course-card__body").contains("Cypress");
  });
});
