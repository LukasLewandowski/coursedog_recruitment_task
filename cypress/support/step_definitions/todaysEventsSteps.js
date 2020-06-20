/// <reference types="cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps';

const cardContent = 'div.card-content';

Then(/^I should see there are no events$/, () => {
    cy.contains('No events today').should('be.visible');
    cy.get('[role=listitem]').should('not.exist');
});

Then(/^I should see all events happening today, including:$/, (eventsDataTable) => {
    eventsDataTable = eventsDataTable.raw();
    cy.get(cardContent).should('be.visible');
    eventsDataTable.forEach((event) => {
        cy.get(cardContent).contains(event.toString()).should('be.visible');
    });
});
