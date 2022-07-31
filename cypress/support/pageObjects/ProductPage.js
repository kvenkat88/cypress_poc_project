/// <reference types="Cypress" />

class ProductPage{

    // constructor(){
    //     this.checkOutButtonLocator = '#navbarResponsive > .navbar-nav > .nav-item > .nav-link'
    // }

    checkOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    checkoutToComplete(){
        return cy.contains('Checkout')
    }

    deliveryLocationSearchSuggestionBox(){
        return cy.get('#country')
    }

    deliveryLocationSearchSuggestionBoxList(){
        return cy.get('.suggestions > ul > li > a')
    }

    clickAgreeCheckBox(){
        return cy.get('#checkbox2')
    }

    clickPurchaseButton(){
        return cy.get("input[value='Purchase']")
    }
}

export default ProductPage;