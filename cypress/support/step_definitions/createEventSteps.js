/// <reference types="cypress" />

import { When } from 'cypress-cucumber-preprocessor/steps';

const createEventDropdownSelector = '#requestEventTypeSelect';
const headerSelector = '.container h1';
const loadingSelector = 'div.loading';
const wholeFormSelector = '.container > div > div > form';
const buttonSelector = 'button.btn-primary';
const eventNameSelector = 'input[placeholder="Set Event Name"]';
const featuredEventRadioSelector = '[aria-labelledby="Featured Event-help"] input[type=radio]';
const roomSearchSelector = '[name="Rooms Search Query"]';
const roomFeatureSelector = '[name="Rooms Required Features"]';
const listItemsSelector = '[role="listitem"]';

When(/^I select "(.+?)" from the dropdown CREATE AN EVENT$/, (dropdownValue) => {
    cy.get(createEventDropdownSelector).select(dropdownValue);
    cy.get(loadingSelector).should('not.be.visible');
    expect(cy.url().should('contain', Cypress.config('baseUrl') + 'events/request'));
});

When(/^I should see a "(.+?)" header$/, (headerValue) => {
    expect(cy.get(wholeFormSelector).should('be.visible'));
    cy.get(headerSelector)
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            expect(text.trim().replace(/\n/g, '')).to.equal(headerValue);
        });
});

When(/^I should see that "(.+?)" button is disabled$/, (buttonName) => {
    cy.get(buttonSelector).contains(buttonName).should('be.disabled');
});

When(/^I fill the "(.+?)" field with the following data: "(.+?)"$/, (fieldName, valueToFill) => {
    switch (fieldName) {
        case 'Event name':
            cy.get(eventNameSelector).should('be.visible').type(valueToFill);
            break;
        case 'Start date':
            /* date should be in form yyyy-MM-dd */
            cy.contains('Start date').siblings('input').should('be.visible').type(valueToFill);
            break;
        case 'End date':
            cy.contains('End date').siblings('input').should('be.visible').type(valueToFill);
            break;
        case 'Featured Event':
            cy.get(featuredEventRadioSelector).check('true');
            break;
        case 'Room name':
            cy.get(roomSearchSelector).type(valueToFill);
            break;
    }
});

When(/^I click "(.+?)" button$/, (buttonName) => {
    cy.get(buttonSelector).contains(buttonName).click();
});

When(/^I fill meeting "(.+?)" field with the following data: "(.+?)"$/, (fieldName, valueToFill) => {
    switch (fieldName) {
        case 'Start date':
            cy.get('[placeholder="Start Date"]').type(valueToFill);
            break;
        case 'End date':
            cy.get('[placeholder="End Date"]').type(valueToFill);
            break;
        case 'Start time':
            cy.get('[placeholder="Start Time"]').type(valueToFill);
            break;
        case 'End time':
            cy.get('[placeholder="End Time"]').type(valueToFill);
            break;
    }
});

When(/^I pick "(.+?)" from the list of features$/, (item) => {
    cy.get(roomFeatureSelector).select(item);
});

When(/^I should see (\d+?) available rooms$/, (number) => {
    cy.get(listItemsSelector).should('have.length', number);
});
