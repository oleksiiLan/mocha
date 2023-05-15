/*
describe.skip('Multiple tests for Email', () => {
    const tests = [
        {email: '123qwerty@gmail.com', expectedResult: '123qwerty@gmail.com'},
        {email: '456qwerty@gmail.com', expectedResult: '456qwerty@gmail.com'},
        {email: '789qwerty@gmail.com', expectedResult: '789qwerty@gmail.com'}
    ]

    tests.forEach(({email, expectedResult}) => {
        it(`Email: ${email}`, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();

            cy.get('[id="exampleInputEmail1"]').type(email);
            cy.get('[id="exampleInputEmail1"]').should("have.value", expectedResult);
            
        })
    })
})

describe.skip('Multiple tests for PASSWORD', () => {
    const tests = [
        {password: '123qwerty', expectedResult: '123qwerty'},
        {password: '456qwerty', expectedResult: '456qwerty'},
        {password: '789qwerty', expectedResult: '789qwerty'}
    ]

    tests.forEach(({password, expectedResult}) => {
        it(`Password: ${password}`, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();

            cy.get('[id="exampleInputPassword1"]').type(password,);
            cy.get('[id="exampleInputPassword1"]').should("have.value", expectedResult);
            
        })
    })
})

describe('Multiple tests for Email using function', () => {
    const testBasicForm = (email, expectedResult) =>

    function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log(`Open "Form Layouts" page ...`);
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();

      cy.get('[id="exampleInputEmail1"]').type(email);
      cy.get('[id="exampleInputEmail1"]').should("have.value", expectedResult);
    };

  it('1st email test:', testBasicForm('123qwerty@gmail.com', '123qwerty@gmail.com'));
  it('2st email test:', testBasicForm('456qwerty@gmail.com', '456qwerty@gmail.com'));
  it('3st email test:', testBasicForm('789qwerty@gmail.com', '789qwerty@gmail.com'));
})

describe('Multiple tests for Email using function', () => {
    const testBasicForm = (password, expectedResult) =>

    function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log(`Open "Form Layouts" page ...`);
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();

      cy.get('[id="exampleInputPassword1"]').type(password);
      cy.get('[id="exampleInputPassword1"]').should("have.value", expectedResult);
    };

  it('1st email test:', testBasicForm('123qwerty', '123qwerty'));
  it('2st email test:', testBasicForm('456qwerty', '456qwerty'));
  it('3st email test:', testBasicForm('789qwerty', '789qwerty'));
})
*/

describe('Multiple tests for Basic form #1', () => {
    const tests = [
        {email: '123qwerty@gmail.com', expectedResultEmail: '123qwerty@gmail.com',
        password: '123qwerty', expectedResultPassword: '123qwerty'},
        {email: '456qwerty@gmail.com', expectedResultEmail: '456qwerty@gmail.com', 
        password: '456qwerty', expectedResultPassword: '456qwerty'},
        {email: '789qwerty@gmail.com', expectedResultEmail: '789qwerty@gmail.com', 
        password: '789qwerty', expectedResultPassword: '789qwerty'}
    ]

    tests.forEach(({email, expectedResultEmail, password, expectedResultPassword}) => {
        it(`Test for: ${email}, ${password}`, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();

            cy.get('[id="exampleInputEmail1"]').type(email);
            cy.get('[id="exampleInputEmail1"]').should("have.value", expectedResultEmail);
            
            cy.get('[id="exampleInputPassword1"]').type(password,);
            cy.get('[id="exampleInputPassword1"]').should("have.value", expectedResultPassword);
            
        })
    })
})

describe('Multiple tests for BasicForm #2', () => {
    const testBasicForm = (email, expectedResultEmail, password, expectedResultPassword) =>

    function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log(`Open "Form Layouts" page ...`);
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();

      cy.get('[id="exampleInputEmail1"]').type(email);
      cy.get('[id="exampleInputEmail1"]').should("have.value", expectedResultEmail);

      cy.get('[id="exampleInputPassword1"]').type(password);
      cy.get('[id="exampleInputPassword1"]').should("have.value", expectedResultPassword);
    };

  it('1st test:', testBasicForm('123qwerty@gmail.com', '123qwerty@gmail.com',
  '123qwerty', '123qwerty'));
  it('2st test:', testBasicForm('456qwerty@gmail.com', '456qwerty@gmail.com',
  '456qwerty', '456qwerty'));
  it('3st test:', testBasicForm('789qwerty@gmail.com', '789qwerty@gmail.com',
  '789qwerty', '789qwerty'));
})

describe('Multiple tests for BasicForm #3', () => {
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
       
    })
});
