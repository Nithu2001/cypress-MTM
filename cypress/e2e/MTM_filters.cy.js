///<reference types="Cypress"/>

describe('Add MTM Threshold Filters', () => {
  beforeEach(()=>{
    cy.fixture('authentication.json').then((authData) => {
        
      // Access authentication credentials from the JSON file
      const username = authData.username;
      const password = authData.password;
      
      // Visit the URL with authentication credentials
      cy.visit('/', {
        auth: {
          username: username,
          password: password
        }
       
      });
     
    });
  });
  
  it('validating the functionality of all the dropdown list filters',()=>{

    //Select view type
    cy.get('[formcontrolname="viewType"]').as('viewtype');
    
    cy.get('@viewtype').should('exist');

    cy.get('@viewtype').click({force: true})
      .click({force: true});
     
    cy.wait(1000);
    cy.get('#mat-select-0-panel').should('be.visible');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain',' All ');

    cy.get('[class="mdc-list-item__primary-text"]').eq(1).click();

    cy.wait(1000);

    //Select pillar
    cy.get('[formcontrolname="pillar"]').as('pillar');

    cy.get('@pillar').should('exist');

    cy.get('@pillar').click({force: true})
    .click({force: true});
    
    cy.wait(1000);
    
    cy.get('#mat-select-2-panel').should('be.visible');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain',' ALL ');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain',' Excellence ');
    
    cy.get('[class="mdc-list-item__primary-text"]').eq(1).click();

    cy.wait(1000);

    //select view value
    cy.get('[formcontrolname="viewValue"]').as('viewValue');

    cy.get('@viewValue').should('exist');

    cy.get('@viewValue').click({force: true})
    .click({force: true});
    cy.wait(1000);
    
    //cy.get('[role="listbox"]').should('be.visible');
    cy.get("#mat-select-4-panel").should('be.visible');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain','(_ALL_)');
    
    cy.get('[class="mdc-list-item__primary-text"]').eq(1).click();

    cy.wait(1000);

    //select KPI Measure
    cy.get('[formcontrolname="kpiMeasure"]').as('kpiMeasure');

    cy.get('@kpiMeasure').should('exist');

    cy.get('@kpiMeasure').click({force: true})
    .click({force: true});
    cy.wait(1000);
    
    cy.get("#mat-select-6-panel").should('be.visible');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain',' All ');
    
    cy.get('[class="mdc-list-item__primary-text"]').eq(1).click();

   cy.wait(1000);

    //select country
    cy.get('[formcontrolname="country"]').as('country');

    cy.get('@country').should('exist');

    cy.get('@country').click({force: true})
    .click({force: true});
    cy.wait(1000);
    
    cy.get("#mat-select-8-panel").should('be.visible');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain',' All ');
    
    cy.get('[class="mdc-list-item__primary-text"]').eq(1).click();

   cy.wait(1000);

    //select customer
    cy.get('[formcontrolname="customer"]').as('customer');

    cy.get('@customer').should('exist');

    cy.get('@customer').click({force: true})
    .click({force: true});
    cy.wait(1000);
    
    cy.get("#mat-select-10-panel").should('be.visible');

    cy.get('[class="mdc-list-item__primary-text"]').should('contain',' (_All_) ');
    
    cy.get('[class="mdc-list-item__primary-text"]').eq(1).click();

   
    //Veiw Thersolds
    
    cy.get('[class="mdc-button__label"]').contains(' View Thresholds ').click();

    //Table Edit
    
    cy.get('table').should('be.visible');

    cy.wait(1000);

    cy.get('[class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]').eq(0)

   .click();
  
   cy.get('[class="mdc-dialog__container"]').should('be.visible');

   cy.get('[formcontrolname="red"]').should('be.visible');
   
   cy.get('[formcontrolname="red"]').clear().type(1000);

   cy.get('[formcontrolname="amber"]').should('be.visible');

   cy.get('[formcontrolname="amber"]').clear().type(200);

   cy.get('[formcontrolname="target"]').should('be.visible');

   cy.get('[formcontrolname="target"]').clear().type(-300);

   cy.get('[formcontrolname="radius"]').should('be.visible');

   cy.get('[formcontrolname="radius"]').clear().type(1);

   cy.get('[class="mdc-button__label"]').contains(' Update ').click();

   //view

   cy.get('[class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"]')
   .eq(0)
   .click({force: true});
   
   cy.wait(1000);

   cy.get('[class="p-datatable-wrapper"]').should('be.visible');

   //filters
   

   


   









    





  });
});