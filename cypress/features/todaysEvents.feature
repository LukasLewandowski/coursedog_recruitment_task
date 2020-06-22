Feature: Today's Events

    Today's Events functionality should display events only for current date

    Scenario: I should not see any events for specific date
        Given Current date is "2020, 6, 16"
        When I navigate to CourseDog page
        And I click on Today's Events
        Then I should see there are no events

    Scenario: I should see that events are present for specific date
        Given Current date is "2020, 6, 18"
        When I navigate to CourseDog page
        And I click on Today's Events
        Then I should see event:
            | QA Recruitment Task Start |
