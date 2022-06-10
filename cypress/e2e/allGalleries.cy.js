/// <reference types="Cypress" />
import {allGalleries} from '../page_objects/allGalleries'

describe ('all galleries page', () =>{
    let searchField = 'ana';

    beforeEach('visit all galleries page', () =>{
        cy.visit('/')
        cy.url().should ('include', '/gallery-app')
    })

    it('go to login page', () =>{
        allGalleries.loginBtn.click();
        cy.url().should('include', '/login');
    })

    it('go to register page', () =>{
        allGalleries.registerBtn.click();
        cy.url().should('include', '/register');
    })

    it('search gallery', () =>{
        allGalleries.search (searchField)
    })
    it('load more galleries', () => {
        allGalleries.loadMoreButton.click()
        cy.url().should ('include', '/gallery-app')
    })
})