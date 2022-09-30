const { HomePage } = require("../pages/home-page.js");
const { LoginPage } = require("../pages/login-page.js");
const { PhotoDetailPage } = require("../pages/photo-detail-page.js");
const { ProfilePage } = require("../pages/profile-page.js");
const { PhotographerProfilePage } = require("../pages/photographer-profile-page.js");

describe("Follow a photographer", () => {
  beforeEach(function () {
    cy.fixture('account.json').as('account');
    LoginPage.navigateToLoginPage();
    cy.get('@account').then((account) => {
      LoginPage.inputUserEmail(this.account.userEmail);
      LoginPage.inputPassword(this.account.password);
      LoginPage.clickLoginButton();

    })
  })

  it.only("Follow a photographer", function () {
    HomePage.navigateToHomePage();
    HomePage.scrollDown();
    HomePage.clickPhotoButton();
    PhotoDetailPage.hoverUserIcon();
    PhotographerProfilePage.clickfollow();
    PhotographerProfilePage.getTitleButtonFollow().should('eq', 'Following')
    PhotographerProfilePage.getColorButton().should('eq', 'rgb(238, 238, 238)')
  })
})