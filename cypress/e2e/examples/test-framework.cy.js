/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"

const homePage=new HomePage()
const productPage=new ProductPage()

describe("Framework Creation Tests", () => {
    // it.only("Dummy", () => { // this test only run
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //     cy.log("I am in it.only() func")
    // })

    before(function(){

        // We can use variable assignment for getting the fixture values as well, like let testData; testData=data; testData.name

        // sample code to run before all of the test/suite
        //cy.visit(Cypress.env('url')) // through cypress env config file option
        // cy.visit("https://rahulshettyacademy.com/angularpractice")

        //cy.visit(Cypress.config('baseUrl')+"/angularpractice/")

        cy.visit("/angularpractice/") // Above line is modified to this one.

        cy.fixture('example').then(function(data){
            //this keyword scope is entire class.
            // data object have whole json of example.json
            // this.data=data // is not working
            globalThis.data=data  //entirely new variable and available across globally
        })

    })

    it("First Test Case", () => {
        
        //const homePage=new HomePage()

        homePage.getEditBox().type(globalThis.data.name) // this.data=data // is not working
        
        homePage.getGender().select(globalThis.data.gender)
        
        //Two Way Data Binding
        homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name)

        homePage.getEditBox().should('have.attr','minlength', '2') //input box minlength validation
        
        homePage.getEntrepreneurRadioButton().should('be.disabled')


        // Test Debugging
        // cy.pause()
        // cy.get(':nth-child(2) > .nav-link').click().debug()

        homePage.getShopTab().click()

        //No prametrize
        // selectProduct is the custom command that we wrote
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')

        //prametrize multiple inputs
        // globalThis.data.productName is an array and we have to iterate and provide the value to custom command
        if (globalThis.data.productName.length!=0){
            globalThis.data.productName.forEach(function(prod_name){
                cy.selectProduct(prod_name)
            })
        }

        productPage.checkOutButton().click()

        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            //cy.log($el.text().split(' ')[1])
            //cy.log($el.text().split(' ')[1].trim())
            //sum=sum+parseInt($el.text().split(' ')[1].trim())  // Also valid
            sum=Number(sum)+Number($el.text().split(' ')[1].trim())
        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){
            var amount_total=element.text().split(" ")[1].trim()
            expect(sum).to.equal(Number(amount_total))
        })
        
        productPage.checkoutToComplete().click()
        productPage.deliveryLocationSearchSuggestionBox().type("India")
        Cypress.config('defaultCommandTimeout', 8000) // Explicit wait mechanism in cypress
        productPage.deliveryLocationSearchSuggestionBoxList().each(($el,index,$list) => {
            if ($el.text()==="India"){
                cy.wrap($el).click()
            }
        })

        productPage.clickAgreeCheckBox().click({force: true})
        productPage.clickPurchaseButton().click()
        //cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then(function(txt){
            cy.log(txt)
            expect(txt.text().includes('Success')).to.be.true //partial text comparision

        })
    })


})