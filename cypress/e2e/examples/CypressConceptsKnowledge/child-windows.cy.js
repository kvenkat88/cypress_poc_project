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

    it('opens a new window with page1', function () {
        // window.open is called on click
        // thus we can create method stub after the cy.visit
        // but before cy.click
        cy.visit('/index.html')
        cy.window().then((win) => {
          cy.stub(win, 'open').as('windowOpen')
        })
    
        cy.get('#open-window').click()
        cy.get('@windowOpen').should('be.calledWith', 'page1.html')
      })
})

