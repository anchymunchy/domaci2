class AllGalleries {

    get allGalleriesButton (){
        return cy.get('.nav-link').eq(0);
    }
    get loginBtn(){
        return cy.get('.nav-link').eq(1);
    }
    get registerBtn(){
        return cy.get('.nav-link').eq(2);
    }
    get searchInput(){
        return cy.get('.form-control');
    }
    get filterBtn(){
        return cy.get('.input-button');
    }
    get loadMoreButton(){
        return cy.get('.btn-custom');
    }
    search (searchInput, filterBtn){
        this.searchInput.type(searchInput)
        this.filterBtn.click()
    }
}
export const allGalleries = new AllGalleries();
    
