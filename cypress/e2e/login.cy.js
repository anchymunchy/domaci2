/// <reference types="Cypress" />
import { loginPage} from '../page_objects/loginPage';

describe('login POM', () => {
    let validEmail = 'bla@gmail.com'
    let validPassword = '12345678'

    before ('visit login page', ()=>{
        cy.visit('https://gallery-app.vivifyideas.com/');
        loginPage.loginBtn.click();
    })

    it('valid login using POM', () =>{
        cy.url().should('include', '/login');
        loginPage.login(validEmail, validPassword);
        cy.url().should('not.include', '/login');
    })
})