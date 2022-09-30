var BTN_ADD_COLLECTION = '(//button[@title="Add to collection"])'
var PHOTO_ADD_ORDER = '(//figure[@itemprop="image"])'
var ALL_PHOTO = 'figure[itemprop="image"]'

export const CollectionPage = {
    
    clickAddToCollectionBtnOnPhoto(orderOfPhoto){
        var BTN_PHOTO_WITH_ORDER = BTN_ADD_COLLECTION + "[" + orderOfPhoto + "]"
        var PHOTO_WITH_ORDER = PHOTO_ADD_ORDER + "[" + orderOfPhoto + "]"
        cy.xpath(PHOTO_WITH_ORDER).realHover('mouse')
        cy.xpath(BTN_PHOTO_WITH_ORDER).click();
    },
    
    getAllPhotosInCollection(){
        return cy.get(ALL_PHOTO)
    }
}