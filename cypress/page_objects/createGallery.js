class CreateGallery {
    get loginBtn(){
        return cy.get('.nav-link').eq(1);
    }

    get emailInput(){
        return cy.get('#email');
    }

    get passwordInput (){
        return cy.get('#password');
    }

    get submitBtn() {
        return cy.get('button')
    }


    
    login(email, password) {
        this.loginBtn.click()
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
    }


    get createGalleryBtn(){
        return cy.get('.mr-auto > :nth-child(3) > .nav-link');
    }

    get titleInput(){
        return cy.get('#title');
    }

    get descriptionInput (){
        return cy.get('#description');
    }

    get imagesInput (){
        return cy.get('.input-group > .form-control');
    }

    get addImageBtn(){
        return cy.get('form > :nth-child(3) > :nth-child(3)');
    }

    get submitBtn2() {
        return cy.get('form > :nth-child(4)')
    }
    
    createGallery(title, description,image) {
        this.createGalleryBtn.click()
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imagesInput.type(image)
        this.submitBtn2.click()
    }

    withoutTitle(description,image){
        this.createGalleryBtn.click();
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn2.click();
    }

    titleWithOneCharacter(title,description, image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn2.click();
    }

    titleWith256Character(title,description, image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn2.click();
    }

    galleryWithoutDescription(title,image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.imagesInput.type(image);
        this.submitBtn2.click();
    }

    descriptionWith1001Char(title, description, image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn2.click();
    }
    createWithWrongUrl(title,description,image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn2.click();
    }
    allEmptyFields(submitBtn){
        this.createGalleryBtn.click();
        this.submitBtn2.click();
    }
}

export const createGallery = new CreateGallery();