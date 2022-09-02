/// <reference types="Cypress" />

describe.skip("Darag and Drop Check", ()=>{
    it("Drag and Drop feature Validation", ()=>{
        cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp")
        const dataTransfer = new DataTransfer()
        cy.get('#drag1').trigger('dragstart',{
            dataTransfer
        })

        cy.get('#div2').trigger('drop',{
            dataTransfer
        })

    })
})

describe("Knowledge Practise tests", ()=>{
    before(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })


    it.skip("Radio Button Selection Validations", ()=>{
        cy.get('#radio-btn-example fieldset label').should('have.length',3).each(($el,index,$list)=>{
            cy.log(cy.wrap($list).eq(index).invoke('text'))
        })

        cy.get('#radio-btn-example label input').check(['radio2']).should('be.checked','radio2')
    })

    it.skip("Check Box Selection Validations", ()=>{
        cy.get('#checkbox-example label input').should('have.length',3).each(($el,index,$list)=>{
            cy.log(cy.wrap($list).eq(index).invoke('text'))
        })

        cy.get('#checkbox-example label input').check(['option1']).should('be.checked','option1')
    })

    it.skip("Select Dropdown Validations", ()=>{
        cy.get('#dropdown-class-example option').should('have.length',4).each(($el,index,$list)=>{
            cy.log(cy.wrap($list).eq(index).invoke('text'))
        })

        cy.get('#dropdown-class-example').select(['option1']).should('have.value','option1')
    })

    it.skip("Dynamic Dropdown or Autocomplete text field or AutoSuggestion text field Validations", ()=>{
        cy.get('#autocomplete').type("Ind")
        cy.wait(2000)

        cy.get("#ui-id-1 li > div").each(($el,index,$list)=>{
            if ($el.text() === "India"){
                cy.wrap($el).click()
            }
        })
    })

    // https://testersdock.com/cypress-new-window/
    it.skip("Open New Window by clicking button", ()=>{
        cy.window().then((win)=>{
            cy.stub(win,'open').as("windowOpen")
        })
        cy.get('#openwindow').click()
        cy.get('@windowOpen').should('be.calledWith',"http://www.qaclickacademy.com/")
        cy.get('#radio-btn-example label input').check(['radio2']).should('be.checked','radio2')
    })

    it.skip("Open New Tab Validations", ()=>{
        // cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.get('#opentab').then((el)=>{
            const url = el.prop('href')
            cy.visit(url)
        })
    })

    it.skip("Switch To Alert Validations", ()=>{
        cy.get('#name').type("Venkatesh")
        cy.get('#alertbtn').click()
        
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello Venkatesh, share this practice page and share your knowledge')
        })

        cy.get('#name').type("Venkatesh")
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello Venkatesh, Are you sure you want to confirm?')
        })
    })

    it.skip("Prompt Dialogue box Validations", ()=>{
        // https://applitools.com/blog/testing-browser-alerts-confirmations-prompts-cypress/
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('This is my answer')
            cy.get('#prompt-button').click()
            cy.get('#prompt-answer').contains('Answer: This is my answer.');
        })

    })

    it.skip("Visible or Invisible Element availability check", ()=>{
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click({force:true})
        cy.get('#displayed-text').should('be.visible').type("Hello Guys")
    })

    it.skip("Web Table Fixed Records Validations", ()=>{
        // .tableFixHead #product tbody tr:nth-child(1) > td
        // cy.get('.tableFixHead #product tbody tr').as('fixedTableRows')
        
        cy.get('.tableFixHead #product tbody tr').should('have.length.at.least',1).as('fixedHeaderTableRows')
        // Below command called the JQUERY length method by using Cypress caller utilities
        cy.log(`Length of the fixed header table is ${Cypress.$('.tableFixHead #product tbody tr').length}`)

        cy.get('@fixedHeaderTableRows').each(($el,index,$list)=>{
            cy.get('.tableFixHead #product tbody').find(`tr:nth-child(${index+1})`).children('td').as('fetchedChildDataItems')
            cy.get('@fetchedChildDataItems').should('have.length.at.least',1).each(($el1,index1,$list1)=>{
                if($el1.text() === "Dwayne"){
                    const person_obj_map = new Map()
                    person_obj_map.set('name', $list1[0].innerText)
                    person_obj_map.set('position', $list1[1].innerText)
                    person_obj_map.set('city', $list1[2].innerText)
                    person_obj_map.set('amount', $list1[3].innerText)
                    
                    //Convert Map Object to obj(dict format)
                    const obj = Object.fromEntries(person_obj_map)
                    cy.log(obj)
                }
            })
            
        })
    })

    it.skip("Mouse Hover Validation", ()=>{
        cy.get('#mousehover').invoke('show')
        cy.get('.mouse-hover-content > a').should('have.length', 2).then(()=>{
            cy.contains('Top').click({force: true})
            cy.url().should('include','top')
        })
    })

    // getIframeBody
    it("Iframes Handling", ()=>{
        cy.getIframeBody('#courses-iframe').as('iframeA')
        cy.get('@iframeA').find("a[href*='mentorship']").eq(0).click()
        cy.wait(10000)
        // cy.get('@iframeA').find("h1[class*='pricing-title']").should('have.length', 2)
    })

})