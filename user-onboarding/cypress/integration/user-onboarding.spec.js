
describe('User-OnBoarding Tests', () => {

    beforeEach(() => {
        cy.visit(`http://localhost:3000`)
    })

    it('Sanity test', () => {
        expect(true).to.equals(true)
    })

    // Selecting Els

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=tos]')
    const submitButton = () => cy.get('form button')

    describe('Proper elements are showing', () => {

        it('Make sure inputs exist', () => {
            nameInput().should('exist')
            emailInput().should('exist')
            passwordInput().should('exist')
            tosInput().should('exist')
            submitButton().should('exist')
        })

    })

    describe('Submitting Form Success', () => {
        it('Can Submit', () => {
            // Filling inputs
            nameInput()
                .type('John Doe')
            emailInput()
                .type('johndoe@domiain.com')
            passwordInput()
                .type('superSecurePassword123')
            tosInput()
                .click()
            // Assert inputs have expected values
            nameInput()
                .should('have.value', 'John Doe')
            emailInput()
                .should('have.value', 'johndoe@domiain.com')
            passwordInput()
                .should('have.value', 'superSecurePassword123')
            tosInput()
                .should('be.checked')
            submitButton()
                .click()
            submitButton()
                .should('be.disabled')   
        })
    })

    describe('Submitting Form Failure', () => {
        it.only('Prevents submission when name input left empty', () => {
            // Fill out inputs
            nameInput()
                .type('Jane Doe')
            emailInput()
                .type('janedoe@domiain.com')
                passwordInput()
                .type('youCantGuessThisOne')
            tosInput()
                .click()
            
            // Clear Name Input
            nameInput()
                .clear()
            // Assertions
            nameInput()
                .should('be.empty')
            cy.contains('Must enter a name')
            submitButton()
                .should('be.disabled')
        })
    })
})
