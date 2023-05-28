/*
Expected result:
1. тост містить текст, що був ведений в поля тайтл та контен
2. знаходиться у місці, відповідному до обраної позиції
3. має відповідний колір
4. містить іконку відповідні до обраного типу тоста.

toast: 
1. top-left / info
2. top-right / success
3. bottom-right / warning
4. bottom-left / danger
*/
/*
describe.skip("Multiple tests for Toast", () => {
  beforeEach(() => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
    //cy.log(`Open "Modal & Overlays" page ...`);
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();

    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  });

  it("Test 1 [top-left / info]", () => {
    cy.get(".form-group nb-select button").eq(0).click(); //position
    cy.get('[ng-reflect-value="top-left"]').click();
    cy.get('.form-group [name="title"]').clear().type("Test title");
    cy.get('.form-group [name="content"]').clear().type("Test content");
    cy.get('.form-group [name="timeout"]').clear().type("5000");

    cy.get(".form-group nb-select button").eq(1).click(); //type
    cy.get('[ng-reflect-value="info"]').click();

    cy.get("nb-card-footer button").eq(0).click();

    //toast
    cy.url().should("include", "/pages/modal-overlays/toastr"); //check url
    cy.get("div .title").should("include.text", "Test title"); // title
    cy.get("div .message").should("include.text", "Test content"); // content
    cy.get("nb-toast")
      .should("have.css", "background-color")
      .and("eq", "rgb(4, 149, 238)"); // toast color
    cy.get('[data-name="question-mark"]').should("be.visible"); // icon

    cy.get('.cdk-overlay-container [style="justify-content: flex-start; align-items: flex-start;"] nb-toast').should('be.visible');

    // cy.get("nb-toast").then(($element) => {
    //   // Отримайте його розміри та позицію
    //   const width = $element.width();
    //   const height = $element.height();
    //   const position = $element.position();

    //   // Виведіть результат у консоль
    //   cy.log(`Ширина: ${width}`);
    //   cy.log(`Висота: ${height}`);
    //   cy.log(`Позиція: ${position.left}, ${position.top}`);
    // });
    // cy.get(".status-info") // coordinate
    //   .invoke("offset")
    //   .then((offset) => {
    //     const { top, left } = offset;
    //     expect(top).to.eq(8); //offsetTop
    //     expect(left).to.eq(8); //offsetLeft
    //   });
  });

  it("Test 2 [top-right / success]", () => {
    cy.get(".form-group nb-select button").eq(0).click(); //position
    cy.get('[ng-reflect-value="top-right"]').click();

    cy.get('.form-group [name="title"]').clear().type("Test title");
    cy.get('.form-group [name="content"]').clear().type("Test content");
    cy.get('.form-group [name="timeout"]').clear().type("5000");

    cy.get(".form-group nb-select button").eq(1).click(); //type
    cy.get('[ng-reflect-value="success"]').click();

    cy.get("nb-card-footer button").eq(0).click();

    //check toast
    cy.url().should("include", "/pages/modal-overlays/toastr"); //check url
    cy.get("div .title").should("include.text", "Test title"); // title
    cy.get("div .message").should("include.text", "Test content"); // content
    cy.get("nb-toast")
      .should("have.css", "background-color")
      .and("eq", "rgb(96, 175, 32)"); // toast color
    cy.get('[data-name="checkmark"]').should("be.visible"); // icon

    cy.get('.cdk-overlay-container [style="justify-content: flex-end; align-items: flex-start;"] nb-toast').should('be.visible');

    // cy.get("nb-toast").then(($element) => {
    //   // Отримайте його розміри та позицію
    //   const width = $element.width();
    //   const height = $element.height();
    //   const position = $element.position();

    //   // рез у консоль
    //   cy.log(`Ширина: ${width}`);
    //   cy.log(`Висота: ${height}`);
    //   cy.log(`Позиція: ${position.left}, ${position.top}`);
    // });
  //   cy.get("nb-toast.status-success") // coordinate
  //     .invoke("offset")
  //     .then((offset) => {
  //       const { top, left } = offset;
  //       expect(top).to.eq(8); //offsetTop
  //       expect(left).to.eq(1512); //offsetLeft
  //     });
  });

  it("Test 3 [bottom-right / warning]", () => {
    cy.get(".form-group nb-select button").eq(0).click(); //position
    cy.get('[ng-reflect-value="bottom-right"]').click();

    cy.get('.form-group [name="title"]').clear().type("Test title");
    cy.get('.form-group [name="content"]').clear().type("Test content");
    cy.get('.form-group [name="timeout"]').clear().type("5000");

    cy.get(".form-group nb-select button").eq(1).click(); //type
    cy.get('[ng-reflect-value="warning"]').click();

    cy.get("nb-card-footer button").eq(0).click();

    //check toast
    cy.url().should("include", "/pages/modal-overlays/toastr"); //check url
    cy.get("div .title.subtitle ").should("include.text", "Test title"); // title
    cy.get("div .message").should("include.text", "Test content"); // content
    cy.get("nb-toast")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 159, 5)"); // toast color
    cy.get('[data-name="alert-triangle"]').should("be.visible"); // icon

    cy.get('.cdk-overlay-container [style="justify-content: flex-end; align-items: flex-end;"] nb-toast').should('be.visible');


    // cy.get(".status-warning") // coordinate of tost
    //   .invoke("offset")
    //   .then((offset) => {
    //     const { top, left } = offset;
    //     expect(top).to.equal(995); //offsetTop
    //     expect(left).to.equal(1512); //offsetLeft
    //   });
  });

  it("Test 4 [bottom-left / danger]", () => {
    cy.get(".form-group nb-select button").eq(0).click(); //position
    cy.get('[ng-reflect-value="bottom-left"]').click();

    cy.get('.form-group [name="title"]').clear().type("Test title");
    cy.get('.form-group [name="content"]').clear().type("Test content");
    cy.get('.form-group [name="timeout"]').clear().type("5000");

    cy.get(".form-group nb-select button").eq(1).click(); //type
    cy.get('[ng-reflect-value="danger"]').click();

    cy.get("nb-card-footer button").eq(0).click();

    //check toast
    cy.url().should("include", "/pages/modal-overlays/toastr"); //check url
    cy.get("div .title.subtitle ").should("include.text", "Test title"); // title
    cy.get("div .message").should("include.text", "Test content"); // content
    cy.get("nb-toast")
      .should("have.css", "background-color")
      .and("eq", "rgb(176, 0, 32)"); // toast color
    cy.get('[data-name="flash"]').should("be.visible"); // icon

    cy.get('.cdk-overlay-container [style="justify-content: flex-start; align-items: flex-end;"] nb-toast').should('be.visible');


  //   cy.get(".status-danger") // coordinate of tost
  //     .invoke("offset")
  //     .then((offset) => {
  //       const { top, left } = offset;
  //       expect(top).to.equal(995); //offsetTop
  //       expect(left).to.equal(8); //offsetLeft
  //     });
  // });
});
*/
describe.only("Multiple tests for Toast", () => {
  const tests = [
    {
      location: "top-left / info",
      position: '[ng-reflect-value="top-left"]',
      type: '[ng-reflect-value="info"]',
      toastColor: "rgb(4, 149, 238)",
      icon: '[data-name="question-mark"]',
      elementLocation: '.cdk-overlay-container [style="justify-content: flex-start; align-items: flex-start;"] nb-toast',
      
    },
    {
      location: "top-right / success",
      position: '[ng-reflect-value="top-right"]',
      type: '[ng-reflect-value="success"]',
      toastColor: "rgb(96, 175, 32)",
      icon: '[data-name="checkmark"]',
      elementLocation: '.cdk-overlay-container [style="justify-content: flex-end; align-items: flex-start;"] nb-toast',
      
    },
    {
      location: "bottom-right / warning",
      position: '[ng-reflect-value="bottom-right"]',
      type: '[ng-reflect-value="warning"]',
      toastColor: "rgb(255, 159, 5)",
      icon: '[data-name="alert-triangle"]',
      elementLocation: '.cdk-overlay-container [style="justify-content: flex-end; align-items: flex-end;"] nb-toast',
    
    },
    {
      location: "bottom-left / danger",
      position: '[ng-reflect-value="bottom-left"]',
      type: '[ng-reflect-value="danger"]',
      toastColor: "rgb(176, 0, 32)",
      icon: '[data-name="flash"]',
      elementLocation: '.cdk-overlay-container [style="justify-content: flex-start; align-items: flex-end;"] nb-toast',
      
    },
  ];

  beforeEach(() => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
    //cy.log(`Open "Modal & Overlays" page ...`);
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();

    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  });

  tests.forEach(
    ({
      position,
      type,
      location,
      toastColor,
      icon,
      elementLocation,
    }) => {
      it(`Test for: ${location}`, () => {
        cy.get(".form-group nb-select button").eq(0).click(); //position
        cy.get(position).click(); // position el
        cy.get('.form-group [name="title"]').clear().type("Test title");
        cy.get('.form-group [name="content"]').clear().type("Test content");
        cy.get('.form-group [name="timeout"]').clear().type("5000");
        cy.get(".form-group nb-select button").eq(1).click(); //type
        cy.get(type).click(); // type el
        cy.get("nb-card-footer button").eq(0).click();

        //toast
        cy.url().should("include", "/pages/modal-overlays/toastr"); //check url
        cy.get("div .title.subtitle ").should("include.text", "Test title"); // title
        cy.get("div .message").should("include.text", "Test content"); // content
        cy.get("nb-toast")
          .should("have.css", "background-color")
          .and("eq", toastColor); // toast color
        cy.get(icon).should("be.visible"); // icon

        // coordinate
        cy.get("nb-toast").then(($element) => {
          const width = $element.width();
          const height = $element.height();
          const offset = $element.offset();

          cy.log(`width: ${width}px`);
          cy.log(`height: ${height}px`);
          cy.log(`offset: ${offset.left}px, ${offset.top}px`);
        });

        cy.get(elementLocation).should("be.visible");

        
        // location verification
        // cy.get(elementLocation)
        //   .invoke("offset")
        //   .then((offset) => {
        //     const { top, left } = offset;
        //     expect(top).to.eq(offsetTop); //offsetTop
        //     expect(left).to.eq(offsetLeft); //offsetLeft
        //   });
      });
    })
});

