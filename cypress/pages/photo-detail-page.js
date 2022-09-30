/**---------------------Web Elements----------------------- */
const BTN_LIKE = "//div[@data-test='photos-route']//div[@class='EdCFo']//button[contains(@title,'Like')]";
const BTN_NEXT = "//a[@title='Next']//*[name()='svg']";
const BTN_X_POPUP = "button[class='fdrIK jpBZ0 cIVI_']";
const BTN_ICON = "[data-test='photos-route'] header span.MssrA";
const BTN_DOWNLOAD_IMG = "//span[text()='Download']/parent::a";

/**---------------------Page Methods----------------------- */
export const PhotoDetailPage = {

    clickLikeButton() {
        cy.xpath(BTN_LIKE).click();
    },
    clickNextButton() {
        cy.xpath(BTN_NEXT).click();
    },
    clickXButton() {
        cy.get(BTN_X_POPUP).click();
    },
    hoverUserIcon() {
        cy.get(BTN_ICON).realHover('mouse');
    },
    getDownloadButton() {
        return cy.xpath(BTN_DOWNLOAD_IMG);
    }
}