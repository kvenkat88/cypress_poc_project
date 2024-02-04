/// <reference types="Cypress" />
import neatCSV from 'neat-csv'
let productName

describe("JWT Session", ()=> {
    it("Logged in through local storage of browser", async() => {
        //Below LoginAPI call provide the promise
        cy.LoginAPI().then(() => {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then(function(ele){
            productName=ele.text()
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.wait(1000)
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click() //checkout button click
        cy.get("[placeholder*='Country']").type('ind')
        cy.get('.ta-results button').each(($el,index,$list) => {
            if ($el.text() === " India"){
                cy.log($el.text())
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click({force: true})
        cy.wait(3000)
        cy.get('.order-summary button').click()

        
        cy.readFile(Cypress.config("fileServerFolder")+"cypress\downloads\order-invoice_kvenkatkrisit.csv").then(async (text) => {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductCSV=csv[0]["Product Name"]
            expect(productName).to.equal(productName)
        })
        
    })
})