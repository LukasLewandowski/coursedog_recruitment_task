/// <reference types="cypress" />

import { When } from 'cypress-cucumber-preprocessor/steps';

const searchFieldSelector = 'input[role=search]';
const filterByOrganizationDropdownSelector = '#orgSelect';
const searchHeaderSelector = '#search-results-header';
const searchLoaderSelector = '[data-icon="spinner"]';

When(/^I type "(.+?)" into search input field and confirm$/, (searchValue) => {
    cy.get(searchFieldSelector).should('be.visible').type(searchValue).type('{enter}');
    cy.get(searchLoaderSelector).should('not.be.visible');
    expect(cy.get(searchHeaderSelector).should('include.text', `Search results for "${searchValue}"`));
});

When(/^I select the "(.+?)" organization from the Filter by Organization dropdown$/, (dropdownValue) => {
    cy.get(filterByOrganizationDropdownSelector).select(dropdownValue);
    cy.get(searchLoaderSelector).should('not.be.visible');
    expect(cy.get(searchHeaderSelector).should('include.text', 'Search'));
});
