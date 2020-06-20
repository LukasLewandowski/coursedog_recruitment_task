/// <reference types="cypress" />

import { Given, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I launch the CourseDog page$/, () => {
    cy.visit(Cypress.config().baseUrl);
    cy.task('log', 'test');
});

And(/^I choose date$/, () => {
    const futureDate = Cypress.moment('2020, 6, 22');
    cy.clock(futureDate);
    cy.task('log', 'futureDate:' + futureDate.format('dddd, DD MMM, YYYY'));

    cy.get('[href="/today"]').should('be.visible').click();

    const todaysDate = Cypress.moment().format('dddd, DD MMM, YYYY');
    cy.task('log', 'todaysDate: ' + todaysDate);
    // [aria-label="Monday, 22 June 2020"]
});
