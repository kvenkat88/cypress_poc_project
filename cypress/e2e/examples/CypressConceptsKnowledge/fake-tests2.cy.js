describe("Cypress Invoke Functionality", function(){
    it("Cypress Invoke First Test Case", function(){
        // Website URL - https://rahulshettyacademy.com/angularAppdemo/
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", 
        (req) => {
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra",
            req.continue((res)=> {
                //any validation
                expect(res.statusCode).to.equal(403)
            })
        
        }
        
        ).as("dummyUrl")
        cy.get('button[class="btn btn-primary"]').click() // click and call intercept mechanism
        cy.wait("@dummyUrl")
        
    })
})