// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el,index,$list) => {
        if ($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add('getIframeBody', (selector) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    cy.log('getIframeBody')
  
    return cy
        .get(selector, { log: false,timeout:10000 })
        .its('0.contentDocument.body', { log: false }).should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then((body) => cy.wrap(body, { log: false }))
  })

Cypress.Commands.add("LoginAPI", () => {
    cy.request('POST', "https://rahulshettyacademy.com/api/ecom/auth/login",
                        {"userEmail":"kvenkatkrisit@gmail.com","userPassword":"Password-1"}
                ).then((response) => {
                    expect(response.status).to.equal(200)
                    Cypress.env('token',response.body.token)
                })
})

