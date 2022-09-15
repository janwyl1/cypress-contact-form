class ContactForm {

    getSubmitBtn() {
        return cy.get('button[name="Submit"]').click()
    }

    getFirstNameInpt() {
        return cy.get('#firstname-input')
    }

    typeFirstNameInpt(text) {
        return cy.get('#firstname-input').type(text)
    }

}

export default ContactForm