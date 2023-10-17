// cypress/integration/e2e-test.spec.js

const { should } = require("chai");

describe('E2E Test', () => {
    it('Should log in, access the dashboard, and log out', () => {
      // Visit the login page
      cy.visit('https://example.cypress.io/commands/actions');
      cy.get("h1").should("contain","Actions");

      // esta tarea es para hacer type de un email
      cy.get("#email1")
        .type("fakeemail@gmail.com")  
        .should("have.value","fakeemail@gmail.com");
      cy.get("#password1")
        .type("weriuewr7673")
        .should("have.value","weriuewr7673");

      cy.get("#fullName1")
        .type("Sergio")
        .should("have.value","Sergio");
      cy.get(".action-form").submit();

      // verificar si el boton esta visible
      cy.get(".action-btn").click();
      // verificar si el mensaje se mostro
      cy.get(".popover").should("be.visible");
      cy.get("div").should("have.text","Popover");
      cy.get(".popover-content").should("contain","This popover");
    });
  });
  