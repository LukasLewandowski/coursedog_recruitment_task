/// <reference types="cypress" />

import { Given, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to CourseDog page$/, () => {
    cy.visit(Cypress.config().baseUrl);
    expect(cy.url().should('equal', Cypress.config('baseUrl')));
    expect(cy.get('#announcer').should('be.visible'));
});

And(/^I choose date$/, () => {
    const futureDate = Cypress.moment('2020, 6, 22');
    cy.clock(futureDate);
    const futureDateFormatted = futureDate.format('dddd, DD MMMM YYYY');
    cy.task('log', 'futureDate:' + futureDateFormatted);

    cy.get('[href="/today"]').should('be.visible').click();

    // const todaysDate = Cypress.moment().format('dddd, DD MMMM YYYY');
    // cy.task('log', 'todaysDate: ' + todaysDate);
    cy.get('[aria-label="' + futureDateFormatted + '"]').click(); // [aria-label="Monday, 22 June 2020"]
});
