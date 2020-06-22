/// <reference types="cypress" />

import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given(/^Current date is "(.+?)"$/, (selectedDate) => {
    const now = new Date(selectedDate).getTime();
    cy.clock(now, ['Date']);
});

When(/^I select a specific date "(.+?)" from the calendar$/, (selectedDate) => {
    const customDate = Cypress.moment(selectedDate);
    const customDateFormatted = customDate.format('dddd, DD MMMM YYYY');
    cy.get('[aria-label="' + customDateFormatted + '"]').click();
    /* replace all whitespaces and replace "," with "/" */
    expect(cy.url().should('equal', Cypress.config('baseUrl') + selectedDate.replace(/\s/g, '').replace(/,/g, '/')));
    expect(cy.get('section > h1').should('include.text', customDate.format('dddd, MMMM DD, YYYY')));
});
