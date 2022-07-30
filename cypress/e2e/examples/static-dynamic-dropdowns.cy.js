/// <reference types="Cypress" />

describe("Third Test Case", () => {
    it.skip("Static Dropdowns", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.get('select')
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2') // validation is based upon <option value='option2'>
    })
    //Dynamic Dropdown
    it("Dynamic Dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list) => {
            if ($el.text()==="India"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', "India")
    })
})

