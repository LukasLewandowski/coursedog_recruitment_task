/// <reference types="cypress" />

import { When } from 'cypress-cucumber-preprocessor/steps';

export const searchFieldSelector = 'input[role=search]';
export const filterByOrganizationSelector = '#orgSelect';

When(/^I type "(.+?)" into search input field and confirm$/, (searchValue) => {
    cy.get(searchFieldSelector).should('be.visible').type(searchValue).type('{enter}');
});

When(/^I select the "(.+?)" organization from the Filter by Organization dropdown$/, (dropdownValue) => {
    cy.get(filterByOrganizationSelector).select(dropdownValue);
});
