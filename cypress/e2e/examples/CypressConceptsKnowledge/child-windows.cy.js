/// <reference types="Cypress" />

describe("Nineth Test Case", () => {
    it("Child Windows Handling", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // To get the attribute value of element using prop() jquery method
        cy.get('#opentab').then((el) => {
            const url=el.prop('href')
            // url is different domain, exception would be appeared
            cy.visit(url)
        })
    })
})

