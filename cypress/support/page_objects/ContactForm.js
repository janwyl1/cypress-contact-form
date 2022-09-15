class ContactForm {

    getSubmitBtn() {
        return cy.get('button[name="Submit"]').click()
    }

    getFirstNameInpt() {
        return cy.get('#firstname-input')
    }

    getLastNameInpt() {
        return cy.get('#lastname-input')
    }

    getEmailInpt() {
        return cy.get('#email-input')
    }

    getPhoneInpt() {
        return cy.get('#phone-input')
    }

    getCompanyInpt() {
        return cy.get('#company-input')
    }

    getLocationInpt() {
        return cy.get('#location-input')
    }

    getMessageInpt() {
        return cy.get('#message-input')
    }

}

export default ContactForm