/// <reference types="cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps';

const cardContent = 'div.card-content';

Then(/^I should see there are no events$/, () => {
    cy.contains('No events today').should('be.visible');
    cy.get('[role=listitem]').should('not.exist');
});

Then(/^I should see all events happening today$/, () => {
    cy.get(cardContent).should('be.visible');
    cy.get(cardContent).contains('QA Recruitment Task Start').should('be.visible');
});
