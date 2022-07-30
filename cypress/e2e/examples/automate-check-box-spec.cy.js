/// <reference types="Cypress" />

describe("Automate CHeck Box", () => {
    it("CheckBox Flow", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2']) // multiple selections or single selection based upon common locator



        // cy.get('#checkbox-example').find('label').each(($el,index,list) => {
        //     cy.log($el.find('input').index())
        // })
    })
})