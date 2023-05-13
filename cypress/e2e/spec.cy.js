describe.skip("Positive Test suit", () => {
  it("Test 1", () => {
    cy.visit('http://example.com');
  })

  it("Test 2", () => {
    cy.visit('http://example.com');
  })
  
  it.skip("Test 3", () => {//only this test will be skipped
    cy.visit('http://example.com');
  })
  
  it("Test 4", () => {
    cy.visit('http://example.com');
  })
})

describe.skip("Negative Test suit", () => {
  it("Test 1", () => {
    cy.visit('http://example.com');
  })
  
  it("Test 2", () => {
    cy.visit('http://example.com');
  })
  
  it("Test 3", () => {
    cy.visit('http://example.com');
  })
  
  it("Test 4", () => {
    cy.visit('http://example.com');
  })
})

describe.skip("Some Test suit", () => {
  it("Test 1", () => {
    cy.visit('http://example.com');
  })
  
  it("Test 2", () => {
    cy.visit('http://example.com');
  })
  
  it("Test 3", () => {
    cy.visit('http://example.com');
  })
  
  it("Test 4", () => {
    cy.visit('http://example.com');
  })

  describe.skip("Some additional Test suit", () => {
    it("Test 1", () => {
      cy.visit('http://example.com');
    })
    
    it("Test 2", () => {
      cy.visit('http://example.com');
    })
    
    it("Test 3", () => {
      cy.visit('http://example.com');
    })
    
    // it.only("Test 4", () => {  //will run oly this test
    //   cy.visit('http://example.com');
    // })
  })
})