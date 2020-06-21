Feature: Search

    User should be able to use search functionality to find events

    Background: Navigate to the main page
        Given I navigate to CourseDog page

    Scenario: I use the Search Input field to find event
        When I type "Finale" into search input field and confirm
        Then I should see event:
            | QA Recruitment Finale |

    Scenario: I use Filter by Organization dropdown
        When I select the "Coursedog Team" organization from the Filter by Organization dropdown
        Then I should see events:
            | QA Task Submission    |
            | QA Task Submission    |
            | QA Task Submission    |
            | QA Recruitment Finale |
