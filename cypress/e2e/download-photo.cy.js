const { NavigationPage } = require("../pages/navigation-page");
const { LoginPage } = require("../pages/login-page");
const { PhotoDetailPage } = require("../pages/photo-detail-page.js");
describe('Download image and verify it', () => {
    beforeEach(function () {
        LoginPage.navigateToLoginPage();
        cy.login(Cypress.env("email"), Cypress.env("password"))
        NavigationPage.getAvatar().should("exist");
    })
    it.only('Download image and verify it', function () {
        NavigationPage.getListImg().its('length')
            .then((n) => Cypress._.random(0, n - 1))
            .then((k) => {
                NavigationPage.getListImg().eq(k).click()
                    .then(($selectedImg) => {
                        const imgName = $selectedImg.attr('href').split("/")[2];
                        const imgAuthor = $selectedImg.attr('title').replace('View the photo by ', "").replace(' ', '-').toLowerCase();
                        const expectedDownloadImg = imgAuthor + "-" + imgName + "-unsplash.jpg";
                        cy.log(expectedDownloadImg);
                        const path = require('path');
                        cy.intercept({ method: 'GET', path: '/photos/**' }).as('downloadImg');
                        const downloadsFolder = Cypress.config("downloadsFolder");
                        PhotoDetailPage.getDownloadButton().click()
                            .then(($downloadButton) => {
                                //const href = $downloadButton.attr('href');
                                //cy.request(href);
                                //cy.wait('@downloadImg');
                                //cy.readFile(path.join(downloadsFolder, expectedDownloadImg)).should("exist");
                            })
                    })

            })
    });
});