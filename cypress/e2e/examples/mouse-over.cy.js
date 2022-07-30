/// <reference types="Cypress" />

describe("Eigth Test Case", () => {
    it("Mouse Over Handling", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('div.mouse-hover-content').invoke('show')
        //we can directly click on invisible element using {force:true}
        // cy.containe('Top').click({force:true})
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
})

