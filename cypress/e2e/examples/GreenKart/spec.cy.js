/// <reference types="Cypress" />

// https://rahulshettyacademy.com/seleniumPractise/#/

describe("Hello World to Cypress", () => {
  it("Launch the Kitchen Sink App", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    // cy.get('.product:visible').should('have.length',4) //retrieve only visible elements in css, if not visible, length retrieved is 5
    //parent child chaining/relationship with css selector
    cy.get('.products').find('.product').should('have.length', 4)
    
    /*
    // using cypress Alias
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)
    */

    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

    /*
      // To use the console.log() or any other method, we have to reolve the cypress promise and will use that
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
        console.log("Hello Cypress")
      })
    */

    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textVeg=$el.find('h4.product-name').text()
      // includes method for sub string validation
      if (textVeg.includes('Cashews')){
          // find() method is not allowed with click() method as per latest version of cypress.io beacuse $el releasing the promise
          cy.wrap($el).find('button').click()
      }      
    })

    // assert if logo text is available
    cy.get('.brand').should('have.text', "GREENKART")

    //then method wait until promise is resolved
    cy.get('.brand').then((logoElement) => {
      cy.log(logoElement.text()) // text() is not cypress command

    })
    





  })
})