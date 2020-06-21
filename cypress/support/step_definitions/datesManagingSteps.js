/// <reference types="cypress" />

import { Given, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^Current date is (.+?)$/, (date) => {
    date = date.replace('/', ',');
    cy.task('log', 'time: ' + date);
    // const customDate = Cypress.moment(date);
    // const now = new Date(2017, 3, 14).getTime() // March 14, 2017 timestamp
    const customDate = new Date(Date.UTC(date)).getTime();
    cy.clock(customDate);
});

And(/^I choose date on calendar$/, () => {
    const futureDate = Cypress.moment('6, 18, 2020');
    cy.clock(futureDate);
    const futureDateFormatted = futureDate.format('dddd, DD MMMM YYYY');
    cy.get('[aria-label="' + futureDateFormatted + '"]').click(); // [aria-label="Monday, 22 June 2020"]
});
