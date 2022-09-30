var BTN_ADD_COLLECTION = '(//button[@title="Add to collection"])'
var BTN_COLLECTION = '(//span[text()="'

export const AddToCollectionPage = {
    clickAddToCollectionBtn() {
        cy.xpath(BTN_ADD_COLLECTION).click();
    },
    clickCollectBtnByName(collectionName) {
        var BTN_COLLECTION_NAME = BTN_COLLECTION + collectionName + '"])' + "[1]"
        cy.xpath(BTN_COLLECTION_NAME).click();
    }
}
