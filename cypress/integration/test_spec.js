// const cypress = require("cypress");
// const { describe } = require("mocha");


describe('Set up and single digit ', () => {
  it('the page loads successfully', () => {
    //arrange
    cy.visit("http://127.0.0.1:5501/index.html")
  })

  it('should have a div with class "calculator__display"', () => {
    cy.get(".calculator__display").should("exist")
  })

  it('should have a p-tag with class "answer"', () => {
    cy.get(".answer").should("exist")
  } )

  it('should check 1 + 5 equals 6 and display answer', () => {
    //act
    cy.get("#1").click()
    cy.get("#add").click()
    cy.get("#5").click()
    cy.get("#output").click()
    
    //assert
  cy.get(".answer").should("have.text", '6')
 })

 it('should check 6 - 4 equals 2 and display answer', ()=> {
  cy.get("#6").click()
  cy.get("#subtract").click()
  cy.get("#4").click()
  cy.get("#output").click()
  
  //assert
  cy.get(".answer").should("have.text", '2')   
 })

 it('should check 6 * 4 equals 24 and display answer', ()=> {
  cy.get("#6").click()
  cy.get("#multiply").click()
  cy.get("#4").click()
  cy.get("#output").click()
  
  //assert
  cy.get(".answer").should("have.text", '24')   
 })

 it('should check 8 / 2 equals 4 and display answer', ()=> {
  cy.get("#8").click()
  cy.get("#divide").click()
  cy.get("#2").click()
  cy.get("#output").click()
  
  //assert
  cy.get(".answer").should("have.text", '4')   
 })



})


describe("Functionality with double digits", () => {
  
  it("should check 11 + 16 = 27 and display answer", () => {
    cy.visit("http://127.0.0.1:5501/index.html")

     cy.get("#1").click()
     cy.get("#1").click()
     cy.get("#add").click()
     cy.get("#1").click()
     cy.get("#6").click()
     cy.get("#output").click()

     cy.get(".answer").should("have.text", "27")

  }
  )

  it("should check 50 - 17 = 33 and display answer", () => {

    cy.get("#5").click()
    cy.get("#zero").click()
    cy.get("#subtract").click()
    cy.get("#1").click()
    cy.get("#7").click()
    cy.get("#output").click()

    cy.get(".answer").should("have.text", "33")

 }
 )
 
  
  
  
} )




   

