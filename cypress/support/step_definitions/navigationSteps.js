/// <reference types="cypress" />

import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to CourseDog page$/, () => {
    cy.visit(Cypress.config().baseUrl);
    expect(cy.url().should('equal', Cypress.config('baseUrl')));
    expect(cy.get('#announcer').should('be.visible'));
});

When(/^I click on Today's Events$/, () => {
    cy.get('[href="/today"]').should('be.visible').click();
    expect(cy.url().should('equal', Cypress.config('baseUrl') + 'today'));
    expect(cy.get('#announcer').should('be.visible'));
    // expect(cy.get('#main-content > section > h1').should('include.text', "Today's events"));
    // expect(cy.get('#main-content > section > h1').contains('\n Today’s events:\n').should('be.visible'));
});

When(/^I click on Featured Events$/, () => {
    cy.get('[href="/featured"]').should('be.visible').click();
    expect(cy.url().should('equal', Cypress.config('baseUrl') + 'featured'));
    expect(cy.get('#announcer').should('be.visible'));
});
