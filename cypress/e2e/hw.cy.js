describe.only('Multiple tests for BasicForm #3', () => {
  let userDetails
  before(() => {
      cy.fixture('testData').then((data) => {//testData.json saved to (data)
          userDetails = data //data saved to userDetails
      })
  })
  it('Test using json', () => { //fixtures/testData.json
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log(`Open "Form Layouts" page ...`);
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();

      cy.get('[id="exampleInputEmail1"]').type(userDetails.email);
      cy.get('[id="exampleInputEmail1"]').should("contain.value", userDetails.email);

      cy.get('[id="exampleInputPassword1"]').type(userDetails.password);
      cy.get('[id="exampleInputPassword1"]').should("contain.value", userDetails.password);
     
      cy.get('div.col-md-6 span.custom-checkbox').eq(0).click();
      //cy.get('div.col-md-6 span.custom-checkbox]').should('be.checked');
      cy.get('.custom-checkbox.checked').should('exist');
  })
});