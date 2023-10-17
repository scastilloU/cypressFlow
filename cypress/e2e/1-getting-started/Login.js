import { TextBio } from './textbio';
import { TextArt } from './Article';

describe("Login Test", () => {
    it("Should log in", () => {

      const textBioInstance = new TextBio();

      const textbioTitle= new TextArt();

      const title= textBioInstance.title;
      const topic= textBioInstance.bioTextTopic;
      const content= textBioInstance.bioTextContent;

      const longText = textBioInstance.bioText;
      // Visit the Real World Application login page
      cy.visit("https://react-redux.realworld.io/#/login");

      const email="scali.1989@gmail.com";
      const pass="Welcome1";
     
        
  
      // Enter username and password
      cy.get('input[type="email"]').type(email);
      cy.get('input[type="password"]').type(pass);
   
      // Click the "Sign in" button
      cy.get('button[type="submit"]').click();

      cy.get(`a[href="#settings"]`).click();

      

      cy.get('input[placeholder="Username"]').clear().type('YourNewUsername');
      cy.get('textarea[placeholder="Short bio about you"]').type(longText, { paste: true });


      cy.contains(`Update Settings`).should("be.visible").click();

      cy.get(`a[href="#editor"]`).click();
      

     

      


      

      
    });
  });


  
  