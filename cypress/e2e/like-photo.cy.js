const { HomePage } = require("../pages/home-page.js");
const { LoginPage } = require("../pages/login-page.js");
const { NavigationPage } = require("../pages/navigation-page.js");
const { PhotoDetailPage } = require("../pages/photo-detail-page.js");
const { ProfilePage } = require("../pages/profile-page.js");

describe("List of like photo", () => {
  beforeEach(function () {
    cy.fixture('account.json').as('account');
    LoginPage.navigateToLoginPage();

    cy.get('@account').then((account) => {
      LoginPage.inputUserEmail(this.account.userEmail);
      LoginPage.inputPassword(this.account.password);
      LoginPage.clickLoginButton();

    })
  })

  it.only("List of like photo", function () {

    HomePage.navigateToHomePage();
    HomePage.clickPhotoButton();
    PhotoDetailPage.clickLikeButton();
    PhotoDetailPage.clickNextButton();
    PhotoDetailPage.clickLikeButton();
    PhotoDetailPage.clickNextButton();
    PhotoDetailPage.clickLikeButton();
    PhotoDetailPage.clickXButton();

    HomePage.navigateToLikePage(this.account.username);
    ProfilePage.getLblNumberOfLike().should('eq', '3');

  })
})