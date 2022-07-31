/// <reference types="Cypress" />

describe("Fifth Test Case", () => {
    it("Alerts and Popups", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        // We are triggering the events through cypress
        cy.on('window:alert', (str) => {
            //Mocha Asertion
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //Mocha Asertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})

