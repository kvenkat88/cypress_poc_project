describe("Cypress API Test Functionality", function(){
    it("API Request", function(){
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts", 
          {
            title: 'foo',
            body: 'bar',
            userId: 1,
          }).then(function(response){
            cy.log(response)
            expect(response.body).to.have.property('userId', 1)
          })

        
    })
})