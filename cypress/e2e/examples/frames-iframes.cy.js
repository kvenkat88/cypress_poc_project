/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

// we have to install module called - npm install -D cypress-iframe

import "cypress-iframe"

describe("Frames Test Case", () => {
    it("Frames and iFrames", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        
        // RahulSetting Comments - This pricing title element has 6 inner frames. 
        // Currently ,cypress does not give inner frames(frame within frame) switching support .Please try frame with other scenario
        
        // Below set of code is not working(if we haven't waited for 10 seconds)
        cy.wait(10000) 
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})

