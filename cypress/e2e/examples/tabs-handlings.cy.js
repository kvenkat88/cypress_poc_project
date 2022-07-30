/// <reference types="Cypress" />

describe("Sixth Test Case", () => {
    it("Child Tabs from Parent Tabs", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()    // target is removed from <a> element tag
        // Get current url of the page. Substring Assertion
        cy.url().should('include','rahulshettyacademy')
        // Navigating browser controls
        cy.go('back')
    })
})

