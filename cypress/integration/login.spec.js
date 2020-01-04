describe('Login', () => {
    
    it('login_verify', () => {
        cy.visit('https://ericssonindiaprivatelimited.canvusapps.com/login')
    })

    it("Verify label", () => {
        cy.get("#email").type("sonia.miglani33@gmail.com")
    })  
    it("Verify label", () => {
        cy.get("#password").type("Sonia@12345")
    })
    it("Verify label", () => {
        cy.get("#remember_me").check();    
        

    })
    it("Verify label", () => {
        cy.get("#loginContainer > div:nth-child(2) > div > form > fieldset > div.row-fluid > div:nth-child(1) > button").click();    
        cy.get('title').should('contain', 'Ericsson India Private Limited')

    })
    it("click add button", () => { 
        cy.get("body > div.navbar > div > div > div:nth-child(5) > ul > li.dropdown > a").click();
        cy.get("body > div.navbar > div > div > div:nth-child(5) > ul > li.dropdown.open > ul > li:nth-child(1) > a")
        .click();
    })
    })



