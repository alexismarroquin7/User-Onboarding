
describe('User-OnBoarding Tests', () => {

    beforeEach(() => {
        cy.visit(`http://localhost:3000`)
    })

    it('Sanity test', () => {
        expect(true).to.equals(true)
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=tos]')

    describe('Proper elements are showing', () => {

        it('Make sure inputs exist', () => {
            nameInput().should('exist')
            emailInput().should('exist')
            passwordInput().should('exist')
            tosInput().should('exist')
        })

    })

    describe('Typing inside inputs', () => {
        it('Fills new user form inputs', () => {
            // Filling inputs
            nameInput()
                .type('John Doe')
            emailInput()
                .type('johndoe@domiain.com')
            // Make sure inputs have expected values
            nameInput()
                .should('have.value', 'John Doe')
            emailInput()
                .should('have.value', 'johndoe@domiain.com')
        })
    })

})
