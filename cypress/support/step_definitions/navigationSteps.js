/// <reference types="cypress" />

import { Given, When } from 'cypress-cucumber-preprocessor/steps';

const announcerSelector = '#announcer';
const todaysEventsSelector = 'nav a[href="/today"]';
const featuredEventsSelector = 'nav a[href="/featured"]';
const pageHeaderSelector = '#main-content > section > h1 > span';

Given(/^I navigate to CourseDog page$/, () => {
    cy.visit(Cypress.config('baseUrl'));
    expect(cy.url().should('equal', Cypress.config('baseUrl')));
    expect(cy.get(announcerSelector).should('be.visible'));
});

When(/^I click on Today's Events$/, () => {
    cy.get(todaysEventsSelector).click();
    cy.visit(Cypress.config('baseUrl') + 'today');
    expect(cy.url().should('equal', Cypress.config('baseUrl') + 'today'));
    expect(cy.get(announcerSelector).should('be.visible'));
    // cy.get(pageHeaderSelector).should('contain', "Today's Events:");
    cy.get(pageHeaderSelector)
        .should('be.visible')
        // .should('contain', 'Today')
        .invoke('text')
        .then((text) => {
            expect(text).to.equal('\n          Today’s events:\n           ');
        });
});

When(/^I click on Featured Events$/, () => {
    cy.get(featuredEventsSelector).click();
    expect(cy.url().should('equal', Cypress.config('baseUrl') + 'featured'));
    expect(cy.get(announcerSelector).should('be.visible'));
    // cy.get(pageHeaderSelector).should('contain', 'Featured Events:');
    cy.get(pageHeaderSelector)
        .should('contain', 'Featured')
        .invoke('text')
        .then((text) => {
            expect(text).to.equal('\n          Featured Events:\n           ');
        });
});
