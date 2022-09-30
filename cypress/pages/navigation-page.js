require('cypress-xpath');

const LNK_IMAGE = "//a[@itemprop='contentUrl']";
const IMG_AVATAR = "//div[@id='popover-avatar-loggedin-menu-desktop']//img";
export const NavigationPage = {
    getAvatar() {
        return cy.xpath(IMG_AVATAR);
    },
    getListImg() {
        return cy.xpath(LNK_IMAGE);
    },
    goToCollection(collectionId) {
        cy.visit('/collections/' + collectionId);
    }
}