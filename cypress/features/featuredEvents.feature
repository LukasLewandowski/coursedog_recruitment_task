Feature: Featured Events

    Featured Events functionality should display upcoming events

    Background: Navigate to the main page
        Given I navigate to CourseDog page

    Scenario: I should see upcoming featured events
        When I click on Featured Events
        Then I should see events:
            | QA Task Submission    |
            | QA Task Submission    |
            | QA Task Submission    |
            | QA Recruitment Finale |
