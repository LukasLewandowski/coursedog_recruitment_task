/// <reference types="cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps';
import { announcerSelector } from './navigationSteps';
import { loadingSelector } from './createEventSteps';

export const cardContentSelector = 'div.card-content';
const cardTitle = cardContentSelector + ' > a[aria-label]';

Then(/^I should see there are no events$/, () => {
    cy.contains('No events today').should('be.visible');
    cy.get('[role=listitem]').should('not.exist');
});

Then(/^I should see event?s?:$/, (dataTable) => {
    expect(cy.get(cardContentSelector).should('be.visible'));
    expect(cy.get(announcerSelector).should('be.visible'));
    expect(cy.get(loadingSelector).should('not.be.visible'));
    dataTable = dataTable.rawTable;
    const expectedEventsTitles = [].concat(...dataTable);
    cy.get(cardTitle)
        .invoke('text')
        .then((text) => {
            const actualEventsTitles = text.replace(/\s+/, '').trim().split('\n    \n      ');
            expect(actualEventsTitles).to.deep.equal(expectedEventsTitles);
        });
});
