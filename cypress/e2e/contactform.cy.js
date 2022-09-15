import ContactForm from '../support/page_objects/ContactForm'

const contact = new ContactForm


describe('Contact Form', () => {

  beforeEach(() => {
    cy.visit('https://share.hsforms.com/1-79TdZVpS9igd9mdtdea5w1khjs')
  })

  it('submits the form successfully', () => {
    contact.getFirstNameInpt().type(Cypress.env('firstName')) // env vars are defined in cypress.config.js
    contact.getLastNameInpt().type('anwyl')
    contact.getEmailInpt().type('james.anwyl@parall.ax')
    contact.getPhoneInpt().type('07555555555')
    contact.getCompanyInpt().type('Parallax')
    contact.getLocationInpt().type('Leeds')
    contact.getMessageInpt().type('Test 123')
  
    contact.getSubmitBtn()

    cy.get('#form-target .hs-form__thankyou-message strong').contains(/thank you for contacting us!/i)
  })

  it("should display an error if first name field is empty", () => {
    contact.getSubmitBtn()

    cy.get('#firstname-input + .hs-form__field__error span').contains('Please complete this required field.')
  })
})