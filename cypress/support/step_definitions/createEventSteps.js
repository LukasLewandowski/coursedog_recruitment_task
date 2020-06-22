/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const createEventDropdownSelector = '#requestEventTypeSelect';
const headerSelector = '.container h1';
export const loadingSelector = 'div.loading';
const wholeFormSelector = '.container > div > div > form';
const buttonSelector = 'button.btn-primary';
const eventNameSelector = 'input[placeholder="Set Event Name"]';
const emailAddressSelector = 'input[placeholder="Type your email address"]';
const featuredEventRadioSelector = '[aria-labelledby="Featured Event-help"] input[type=radio]';
const roomSearchSelector = '[name="Rooms Search Query"]';
const roomFeatureSelector = '[name="Rooms Required Features"]';
const listItemsSelector = '[role="listitem"]';
const modalSelector = 'div.modal-content';
const selectedRoomNameSelector = 'div > input[readonly="readonly"]';

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

When(/^I should see that "(.+?)" button is (disabled|enabled)$/, (buttonName, state) => {
    if (state === 'disabled') {
        cy.get(buttonSelector).contains(buttonName).should('be.disabled');
    } else if (state === 'enabled') {
        cy.get(buttonSelector).contains(buttonName).should('be.enabled');
    } else {
        throw Error(`unknown ${state}`);
    }
});

When(/^I fill the "(.+?)" field with the following data: "(.+?)"$/, (fieldName, valueToFill) => {
    switch (fieldName) {
        case 'Event name':
            cy.get(eventNameSelector).should('be.visible').type(valueToFill);
            break;
        case 'Email Address':
            cy.get(emailAddressSelector).should('be.visible').clear().type(valueToFill);
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
        default:
            throw Error('case not handled');
    }
});

When(/^I click "(.+?)" button$/, (buttonName) => {
    cy.get(buttonSelector).contains(buttonName).click();
    if (buttonSelector === 'Select Room') {
        expect(cy.get(modalSelector).should('be.visible'));
    }
    cy.get(loadingSelector).should('not.be.visible');
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
        default:
            throw Error('case not handled');
    }
});

When(/^I pick "(.+?)" from the list of features$/, (item) => {
    cy.get(roomFeatureSelector).select(item);
});

When(/^I should see (\d+?) available room?s?$/, (number) => {
    cy.get(listItemsSelector).should('have.length', number);
});

When(/I click on "(.+?)" room$/, (roomName) => {
    cy.get(listItemsSelector).contains(roomName).click();
});

Then(
    /I should see that the "(.+?)" modal is closed and the room has been changed to "(.+?)"$/,
    (modalName, roomName) => {
        expect(cy.get(modalSelector).should('not.be.visible'));
        expect(cy.contains(modalName).should('not.be.visible'));
        cy.get('label').contains('Room').get(selectedRoomNameSelector).should('be.visible');
        expect(cy.contains(roomName).should('be.visible'));
    },
);

When(/I should see a confirmation that the event request has been sent$/, () => {
    cy.contains('We have sent confirmation to the email you provided.').should('be.visible');
    cy.get(headerSelector)
        .invoke('text')
        .then((text) => {
            expect(text).to.equal('\n          Your event request has been submitted!\n      ');
        });
    expect(cy.get(buttonSelector).contains('Back to home').should('be.visible'));
});
