Feature: Calendar

    Calendar should display events only for selected date

    Scenario: I select specific date on the calendar
        Given I navigate to CourseDog page
        When I select a specific date "2020, 6, 18" from the calendar
        Then I should see event:
            | QA Recruitment Task Start |
