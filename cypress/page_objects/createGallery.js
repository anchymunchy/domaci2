class CreateGallery {
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

    get submitBtn() {
        return cy.get('form > :nth-child(4)')
    }

    
    createGallery(title, description,image) {
        this.createGalleryBtn.click()
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imagesInput.type(image)
        this.submitBtn.click()
    }

    withoutTitle(description,image){
        this.createGalleryBtn.click();
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn.click();
    }

    titleWithOneCharacter(title,description, image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn.click();
    }

    titleWith256Character(title,description, image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn.click();
    }

    galleryWithoutDescription(title,image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.imagesInput.type(image);
        this.submitBtn.click();
    }

    descriptionWith1001Char(title, description, image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn.click();
    }
    createWithWrongUrl(title,description,image){
        this.createGalleryBtn.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(image);
        this.submitBtn.click();
    }
    allEmptyFields(submitBtn){
        this.createGalleryBtn.click();
        this.submitBtn.click();
    }
}

export const createGallery = new CreateGallery();