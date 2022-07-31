describe("Cypress Invoke Functionality", function(){
    it("Cypress Invoke First Test Case", function(){
        // Website URL - https://rahulshettyacademy.com/angularAppdemo/
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
        
        {
            //MOcked Response
            statusCode: 200,
            body: [
                {
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
                } 
            ]
        }).as("bookRetrievals") // It will give promise
        cy.get('button[class="btn btn-primary"]').click()
        // wait until promise is resolved
        cy.wait("@bookRetrievals").should(({request,response}) => {
            cy.get('tr').should('have.length',response.body.length+1) // table length match
            
        })
        cy.get('p').should('have.text', "Oops only 1 Book available")

        // length of the response array/list should match with UI table data

    })
})