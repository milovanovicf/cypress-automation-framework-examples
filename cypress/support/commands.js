// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("baseUrlVisit", () => {
  cy.visit("/");
});

Cypress.Commands.add("logInPageAssertion", () => {
  cy.get(".header__nav-item ").contains("My Dashboard").contains("Dashboard");
  cy.url().should("include", "collections");
});
//

Cypress.Commands.add("correctLogin", () => {
  cy.get(".form__group").contains("Email").type("user123@gmail.com");
  cy.get(".form__group").contains("Password").type("Password1");
  cy.get("[type=checkbox]").click();
  cy.get("[type=submit]").click();
});

Cypress.Commands.add("assertCorrectBtnPress", () => {
  cy.get(".entry-title").should("have.text", "Button success");
  cy.go("back");
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require("cypress-downloadfile/lib/downloadFileCommand");
import "cypress-file-upload";
