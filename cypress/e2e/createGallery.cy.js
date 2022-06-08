/// <reference types="Cypress" />
import {createGallery} from '../page_objects/createGallery';


describe('create galery', ()=>{
    let title = 'test';
    let invalidTitle = 't';
    let invalidTitle2 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    let invalidDescription = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'
    let description = 'test';
    let image = 'https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036__340.jpg'
    let wrongUrl = 'https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036__340.txt'
    beforeEach('login',()=>{
        cy.visit('https://gallery-app.vivifyideas.com/login')
        cy.get('#email').type('bla@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn-custom').click();
    })

    it('create gallery', () =>{
    createGallery.createGallery(title, description, image)
        cy.url().should('not.include', '/create')
    })

    it('create gallery without title', () =>{
        createGallery.withoutTitle(description, image)
           cy.url().should('include', '/create')
    })

    it('create gallery with one char in title', () =>{
       createGallery.titleWithOneCharacter(invalidTitle,description, image)
           cy.url().should('include', '/create')
    })
    
    it('create gallery with 256 char in title', () =>{
        createGallery.titleWith256Character(invalidTitle2,description, image)
           cy.url().should('include', '/create')
    })
    it('create gallery without description', () =>{
        createGallery.galleryWithoutDescription(title,image)
            cy.url().should('include', '/create')
    })       

    it('create gallery with invalid description', () =>{
        createGallery.descriptionWith1001Char(title,invalidDescription,image)
            cy.url().should('include', '/create')
    })    

    it('create gallery with wrong url format', () =>{
        createGallery.createWithWrongUrl(title,description, wrongUrl);
        cy.url().should('include', '/create');
      })
    
      it('all empty fields', () =>{
        createGallery.allEmptyFields();
        cy.url().should('include', '/create');
      })
    
    
    })
