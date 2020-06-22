# QA Recruitment Task for CourseDog

## install dependencies:

`npm install`

## execute tests in headless mode:

`npm run test`

## open Cypress app:

`npm run cypress`

### execute eslint

`npm run lint`

<hr>

#### bug report:

1:
Summary: User is not able to open event details after clicking on event card

Steps to reproduce:

1. Open page https://damian-events.coursedog.com/
2. Choose day containing event using calendar
3. Click on event card

Actual result:

-   Event details are not displayed

Expected result:

-   User should be able to open event details after clicking on any space on event card

2:
Summary: There are missing required fields indicators for Create new event form

Steps to reproduce:

1. Open page https://damian-events.coursedog.com/
2. Choose Public Event under Create an Event dropdown
3. Fill two fields marked as required (email and event name)

Actual result:

-   Submit button is disabled

Expected result:

-   Submit button should be enabled or more fields should be marked as required
