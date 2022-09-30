const BTN_FOLLOW = "//button[contains(@title,'Follow')]";

export const PhotographerProfilePage = {
    clickfollow() {
        cy.xpath(BTN_FOLLOW).click();
    },
    getTitleButtonFollow() {
        return cy.xpath(BTN_FOLLOW).invoke('attr', 'title');
    },
    getColorButton() {
        return cy.xpath(BTN_FOLLOW).invoke('css', 'background-color')
    }
}