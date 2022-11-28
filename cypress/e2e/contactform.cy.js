import ContactForm from '../support/page_objects/ContactForm'
import 'cypress-axe'

const contact = new ContactForm

describe('Contact Form', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('formUrl'))  // env vars are defined in cypress.config.js
    cy.injectAxe()
  })

  it('submits the form successfully', () => {
    contact.getFirstNameInpt().type('James')
    contact.getLastNameInpt().type('Anwyl')
    contact.getEmailInpt().type('james.anwyl@parall.ax')
    contact.getPhoneInpt().type('07555555555')
    contact.getCompanyInpt().type('Parallax')
    contact.getLocationInpt().type('Leeds')
    contact.getMessageInpt().type('Test 123')
  
    contact.getSubmitBtn()

    cy.get('#form-target .hs-form__thankyou-message strong').contains(/thank you for contacting us!/i)
  })

  it("should display validation errors when required fields are empty", () => {
    contact.getSubmitBtn()

    cy.get('#firstname-input + .hs-form__field__error span').contains('Please complete this required field.')
    cy.get('#lastname-input + .hs-form__field__error span').contains('Please complete this required field.')
    cy.get('#email-input + .hs-form__field__error span').contains('Please complete this required field.')
    cy.get('#message-input + .hs-form__field__error span').contains('Please complete this required field.')
    cy.contains('Please complete all required fields.')
  })
  it("should display a validation error when email is invalid", () => {
    cy.get('#email-input').type('invalid')
    contact.getSubmitBtn()

    cy.get('#email-input + .hs-form__field__error span').contains('Email must be formatted correctly.')
  })

  it("should have no wcag2 violations on load", () => {
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a']
      }
    }) 
  })

  it("should have no wcag2 violations when validation messages are visible", () => {
    contact.getSubmitBtn()
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a']
      }
    }) 
  })
})