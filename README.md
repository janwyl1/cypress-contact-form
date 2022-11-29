# Cypress Contact Form Test

A basic example of using [Cypress](https://www.cypress.io/) to test a contact form.

Used for the frontend training workshop 15/09/2022
## Info

- Tests form submission, validation and accessibility
- Includes CI integration (tests are run in github actions each time code is pushed)
## Steps we performed

**Installed cypress**
- npm install —save-dev

**Opened the cypress app and completed setup**
- npx cypress open
- chose 'End to End' and accept the default config options

**Added functional tests**
- Added a test for form submission
- Added a test for validation

**Refactored tests**
- Moved the cy.visit() command into a [beforeEach hook](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)
- Used the 'Page Object Pattern' to avoid repetition
  - Created a file at support/page_objects/ContactForm.js
  - Added a class to the file
  - Created re-usable methods that contain the code we used to select elements on the page
- Setup [environment variables](https://docs.cypress.io/guides/guides/environment-variables.html)
  - Added an 'env' property to cypress.config.js
  - Added a formUrl property inside env
  - Called Cypress.env('formUrl') to reference it within our test

**Setup CI integration**
- Created a github actions yaml file at .github/workflows/cypress.yaml
- Used the example from the Cypress docs to run our tests - https://docs.cypress.io/guides/continuous-integration/github-actions#Basic-Setup

**Added Accessibility tests**
- Installed [cypress-axe](https://github.com/component-driven/cypress-axe) 
- Imported the library in your test file
- Called cy.injectAxe() in our beforeEach method
- Created separate tests for on page load, and after triggering validation messages