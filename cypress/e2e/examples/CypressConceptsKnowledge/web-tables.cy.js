/// <reference types="Cypress" />

describe("Seventh Test Case", () => {
    it("Web Tables Handling", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#product tr td:nth-child(2)').each(($el,index,$list) => {
            const text=$el.text()
            if(text.includes('Python')){
                // Fetch the course price(next sibling)
                // We have to resolve promise of jquery and get text
                cy.get('#product tr td:nth-child(2)').eq(index).next().then(function(price){
                    cy.log(price.text())
                    expect(price.text()).to.equal('25')
                })
            }
        })  
    })
})

