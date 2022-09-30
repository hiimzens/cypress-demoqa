require('cypress-xpath');
const PROFILE_URL = "/@";
const BTN_EDIT_PROFILE = "//a[text()='Edit profile']";
const LBL_USER_FULL_NAME = "//a[text()='Edit profile']//ancestor::div[@class='iqGFX']/div[1]";
const LBL_NUMBER_OF_LIKE = "//span[contains(text(),'Likes')]/following-sibling::span//span";
const LBL_PICTURE_LIKED = "(//figure[@itemprop='image'])[1]";
export const ProfilePage = {
    navigate(username) {
        cy.visit(PROFILE_URL + username);
    },
    clickEditProfileBtn() {
        return cy.xpath(BTN_EDIT_PROFILE).click();
    },
    getUserFullName() {
        return cy.xpath(LBL_USER_FULL_NAME);
    },
    getLblNumberOfLike() {
        return cy.xpath(LBL_NUMBER_OF_LIKE).invoke('text');
    },
    getLblPictureLiked() {
        return cy.xpath(LBL_PICTURE_LIKED);
    },
}