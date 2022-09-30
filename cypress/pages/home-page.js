/**---------------------Web Elements----------------------- */
const BTN_PHOTO = "[data-test='editorial-route'] div.ripi6:first-child>div:first-child";
// const BTN_PHHOTO = "//div[@id='app']//div[@data-test='editorial-route']/div/div[@class='rJ2xz bYpwS U8eXG M5vdR']/div/div[@class='mItv1']/div[1]/figure[1]/div[1]";
const LIKEPAGE_URL = "/likes";
const COLLECTION_URL = "/collections";

/**---------------------Page Methods----------------------- */
export const HomePage = {
    clickPhotoButton() {
        cy.get(BTN_PHOTO).click({ multiple: false });
    },
    navigateToLikePage(username) {
        cy.visit(username + LIKEPAGE_URL);
    },
    navigateToHomePage() {
        cy.visit(Cypress.env("baseUrl"));
    },
    scrollDown() {
        cy.get(BTN_PHOTO).scrollIntoView();
        cy.wait(2000);
    },
    navigateToCollectionPage(username) {
        cy.visit(username + COLLECTION_URL);
    }
}