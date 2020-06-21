/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const buttonsSelector = 'button.btn';
const fieldLabelSelector = 'article div';
const fieldValueSelector = 'div.v-popover';
const addressFieldSelector = 'article [data-icon="map-marker-alt"]';

When(/^I click on the "(.+?)" event card$/, (eventName) => {
    cy.get('div.card-content').contains(eventName).click();
});

Then(/^I should see "(.+?)" button$/, (buttonName) => {
    cy.get(buttonsSelector).contains(buttonName).should('be.visible');
});

Then(/^I should see "(.+?)" field$/, (fieldName) => {
    switch (fieldName) {
        case 'Address':
            cy.get(addressFieldSelector).parent().should('be.visible');
            break;
        default:
            cy.get(fieldLabelSelector)
                .contains(fieldName)
                .should('be.visible')
                .siblings(fieldValueSelector)
                .should('be.visible');
    }
});

Then(/^I can see (\d+?) other meetings that will take place as part of that event$/, (numberOfEvents) => {
    cy.contains('Upcoming meetings from this event').should('be.visible');
    cy.get('div.card-content').should('have.length', numberOfEvents);
});
