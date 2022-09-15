import ContactForm from '../support/page_objects/ContactForm'

const contact = new ContactForm


describe('Contact Form', () => {

  beforeEach(() => {
    cy.visit('https://share.hsforms.com/1-79TdZVpS9igd9mdtdea5w1khjs')
  })

  it.only('submits the form successfully', () => {
    contact.getFirstNameInpt().type(Cypress.env('firstName'))
    // contact.typeFirstNameInpt('james')
    cy.get('#lastname-input').type('anwyl')
    cy.get('#email-input').type('james.anwyl@parall.ax')
    cy.get('#phone-input').type('07555555555')
    cy.get('#company-input').type('Parallax')
    cy.get('#location-input').type('Leeds')
    cy.get('#message-input').type('Test 123')

    contact.getSubmitBtn()

    cy.get('#form-target .hs-form__thankyou-message strong').contains(/thank you for contacting us!/i)
  })

  it("should display an error if first name field is empty", () => {
    contact.getSubmitBtn()

    cy.get('#firstname-input + .hs-form__field__error span').contains('Please complete this required field.')

  })
})