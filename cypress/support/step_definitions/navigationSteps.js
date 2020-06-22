/// <reference types="cypress" />

import { Given, When } from 'cypress-cucumber-preprocessor/steps';

export const announcerSelector = '#announcer';
const todaysEventsSelector = 'nav a[href="/today"]';
const featuredEventsSelector = 'nav a[href="/featured"]';
const pageHeaderSelector = '#main-content > section > h1 > span';

Given(/^I navigate to CourseDog page$/, () => {
    cy.visit('/');
    expect(cy.url().should('equal', Cypress.config('baseUrl')));
    expect(cy.get(announcerSelector).should('be.visible'));
});

When(/^I click on Today's Events$/, () => {
    cy.get(todaysEventsSelector).click();
    expect(cy.url().should('equal', Cypress.config('baseUrl') + 'today'));
    expect(cy.get(announcerSelector).should('be.visible'));
    cy.get('section').should('contain.text', '\n          Today’s events:\n           ', { timeout: 4000 });
});

When(/^I click on Featured Events$/, () => {
    cy.get(featuredEventsSelector).click();
    expect(cy.url().should('equal', Cypress.config('baseUrl') + 'featured'));
    expect(cy.get(announcerSelector).should('be.visible'));
    cy.get(pageHeaderSelector)
        .should('contain', 'Featured')
        .invoke('text')
        .then((text) => {
            expect(text).to.equal('\n          Featured Events:\n           ');
        });
});
