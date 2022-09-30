const TXT_USER_FIRST_NAME = "#user_first_name";
const TXT_USER_LAST_NAME = "#user_last_name";
const TXT_USER_EMAIL = "#user_email";
const TXT_USERNAME = "#user_username";
const TXT_USER_LOCATION = "#user_location";
const TXT_USER_PERSONAL_SITE = "#user_url";
const TXA_USER_BIO = "#user_bio";
const TXT_USER_INTERESTS = "#user_interests_tag";
const TXT_INSTAGRAM_USERNAME = "#user_instagram_username";
const TXT_TWITER_USERNAME = "#twitter_username";
const TXT_DONATION_PAYPAL = "#user_paypal";
const BTN_UPDATE_ACCOUNT = "input[value='Update account']";

export const EditProfilePage = {
    inputFirstName(firstName) {
        cy.get(TXT_USER_FIRST_NAME).clear().type(firstName);
    },
    inputLastName(lastName) {
        cy.get(TXT_USER_LAST_NAME).clear().type(lastName);
    },
    inputUserEmail(email) {
        cy.get(TXT_USER_EMAIL).clear().type(email);
    },
    inputUsername(username) {
        cy.get(TXT_USERNAME).clear().type(username);
    },
    inputLocation(location) {
        cy.get(TXT_USER_LOCATION).clear().type(location);
    },
    inputPersonalSite(personalSite) {
        cy.get(TXT_USER_PERSONAL_SITE).clear().type(personalSite);
    },
    inputBio(bio) {
        cy.get(TXA_USER_BIO).clear().type(bio);
    },
    inputInterest(interest) {
        cy.get(TXT_USER_INTERESTS).clear().type(interest);
    },
    inputInstagramUsername(instagramUsername) {
        cy.get(TXT_INSTAGRAM_USERNAME).clear().type(instagramUsername);
    },
    inputTwiterUsername(twiterUsername) {
        cy.get(TXT_TWITER_USERNAME).clear().type(twiterUsername);
    },
    inputPaypal(paypal) {
        cy.get(TXT_DONATION_PAYPAL).clear().type(paypal);
    },
    clickUpdateBtn() {
        cy.get(BTN_UPDATE_ACCOUNT).click();
    }
}