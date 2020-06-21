Feature: Create Event

    User should be able to create a new event

    Background: Navigate to the main page
        Given I navigate to CourseDog page

    Scenario: I use the Search Input field to find event
        When I select "Public Events" from the dropdown CREATE AN EVENT
        Then I should see a "Request A New Event: Public Form" header
        And I should see that "Submit" button is disabled
        When I fill the "Event name" field with the following data: "Lukas L"
        And I fill the "Email Address" field with the following data: "nluypafaukkadjmxtd@awdrt.com"
        And I fill the "Start date" field with the following data: "2020-09-01"
        And I fill the "End date" field with the following data: "2020-09-02"
        And I fill the "Featured Event" field with the following data: "Yes"
        When I click "Add Meeting" button
        And I fill meeting "Start date" field with the following data: "2020-09-01"
        And I fill meeting "End date" field with the following data: "2020-09-02"
        And I fill meeting "Start time" field with the following data: "01:00"
        And I fill meeting "End time" field with the following data: "02:00"
        When I click "Select Room" button
        And I pick "microphone" from the list of features
        And I click "Search for Available Rooms" button
        Then I should see 4 available rooms
        When I fill the "Room name" field with the following data: "Online"
        And I click "Search for Available Rooms" button
        Then I should see 1 available room
        When I click on "Online Chat" room
        Then I should see that the "Select Room" modal is closed and the room has been changed to "Online Chat"
        And I should see that "Submit" button is enabled
        When I click "Submit" button
        Then I should see a confirmation that the event request has been sent

