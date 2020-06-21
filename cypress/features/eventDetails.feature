Feature: Event details

    After clicking on event user should be able to see more details

    Background: Navigate to the Featured Events page
        Given I navigate to CourseDog page
        And I click on Featured Events

    Scenario: I should see event details
        When I click on the "QA Task Submission" event card
        Then I should see "Add to calendar" button
        And I should see "Add to Google Calendar" button
        And I should see "Address" field
        And I should see "Event Type" field
        And I should see "Organized by" field
        And I can see 2 other meetings that will take place as part of that event
