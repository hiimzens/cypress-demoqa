const { ProfilePage } = require("../pages/profile-page");
const { LoginPage } = require("../pages/login-page");
const { EditProfilePage } = require("../pages/edit-profile-page");
const { NavigationPage } = require("../pages/navigation-page");

describe('Update user information in the Profile page ', () => {
    before(function () {
        LoginPage.navigateToLoginPage();
        cy.fixture('user-information.json').as('userInformation');
    })
    beforeEach(function () {
        cy.login(this.userInformation.usernameEmail, this.userInformation.password);
        NavigationPage.getAvatar();
        ProfilePage.navigate(this.userInformation.oldInfo.username)
    })
    it.only('Update user information with all fields', function () {
        ProfilePage.clickEditProfileBtn();
        const newInfo = this.userInformation.newInfo;
        EditProfilePage.inputFirstName(newInfo.firstName);
        EditProfilePage.inputLastName(newInfo.lastName);
        EditProfilePage.inputUserEmail(newInfo.userEmail);
        EditProfilePage.inputUsername(newInfo.username);
        EditProfilePage.inputLocation(newInfo.location);
        EditProfilePage.inputPersonalSite(newInfo.personalSite);
        EditProfilePage.inputBio(newInfo.bio);
        EditProfilePage.inputInterest(newInfo.interest);
        EditProfilePage.inputInstagramUsername(newInfo.instagramUsername);
        EditProfilePage.inputTwiterUsername(newInfo.twitterUsername);
        EditProfilePage.inputPaypal(newInfo.paypal);
        EditProfilePage.clickUpdateBtn();
        ProfilePage.navigate(newInfo.username);
        ProfilePage.getUserFullName().should("have.text", newInfo.firstName + " " + newInfo.lastName);
        cy.writeFile('cypress/fixtures/user-information.json', {
            usernameEmail: this.userInformation.usernameEmail,
            password: this.userInformation.password,
            oldInfo: this.userInformation.newInfo,
            newInfo: this.userInformation.oldInfo
        });
    });
});