const { APIConstants } = require('../constants/api-constants.js');
const { NavigationPage } = require('../pages/navigation-page.js');
const { CollectionPage } = require('../pages/collection-page.js');
const { AddToCollectionPage } = require('../pages/add-to-collection-page.js');
const { LoginPage } = require('../pages/login-page.js');

describe('Remove photo from collection', () => {
    beforeEach('There is a private collection with two photos', () => {
        cy.fixture('create-collection.json').as('collection')
        cy.log("Create a private collection")
        cy.get('@collection').then((collection) => {
            cy.sendrequest('POST', Cypress.env("apiUrl") + APIConstants.ENDPOINT_COLLECTION, {
                "title": collection.collection_name,
                "private": collection.private
            }).then(response => {
                cy.wrap(response.body.id).as('collectionId');
                cy.log(response.body.id);
            })
        })

        cy.log("Get 2 random photos")
        cy.get('@collection').then((collection) => {

            cy.sendrequest('GET', Cypress.env("apiUrl") + APIConstants.ENDPOINT_GET_RANDOM_PHOTO, {
                'count': collection.number_of_photo_to_add
            }).then(response => {
                expect(response.body.length).equals(collection.number_of_photo_to_add);
                const photoId = [];

                for (let i = 0; i < response.body.length; i++) {
                    photoId.push(response.body[i].id);
                }
                cy.wrap(photoId).as('photosId');
            })
        })

        cy.log("Add list photos into collection")
        cy.get('@collectionId').then((collectionId) => {
            cy.get('@photosId').then((photosId) => {
                for (let i = 0; i < photosId.length; i++) {
                    cy.sendrequest('POST', Cypress.env("apiUrl") + APIConstants.ENDPOINT_COLLECTION + collectionId + APIConstants.ENDPOINT_ADD_PHOTO_TO_COLLECTION, {
                        'collection_id': collectionId,
                        'photo_id': photosId[i],
                    })
                }
            })
        })

        cy.log("Verify that 2 photos are already in the collection")
        cy.get('@collection').then((collection) => {
            cy.get('@collectionId').then((collectionId) => {
                cy.sendrequest('GET', Cypress.env("apiUrl") + APIConstants.ENDPOINT_COLLECTION + collectionId, {
                    'id': collectionId
                }).then(response => {
                    expect(response.body.total_photos).equals(collection.number_of_photo_to_add);
                })
            })
        })

    })

    it.only('Remove photos from the collection successfully', function () {
        cy.log("Login to the application")
        LoginPage.navigateToLoginPage();

        cy.login(Cypress.env("email"), Cypress.env("password"))
        var orderOfPhoto = 2
        var numberOfPhotoLeft = 1

        cy.log("Remove 1 photo from collection")
        NavigationPage.goToCollection(this.collectionId)
        CollectionPage.clickAddToCollectionBtnOnPhoto(orderOfPhoto)
        AddToCollectionPage.clickCollectBtnByName(this.collection.collection_name)

        cy.log("Verify that there is only 1 remaining photo in the collection")
        NavigationPage.goToCollection(this.collectionId)
        cy.reload()
        CollectionPage.getAllPhotosInCollection().should("have.length", numberOfPhotoLeft)
    })

    afterEach("Delete collection", function () {
        cy.sendrequest('DELETE', Cypress.env("apiUrl") + APIConstants.ENDPOINT_COLLECTION + this.collectionId, {
            'id': this.collectionId
        }).then(response => {
            expect(response.status).equals(204)
        })
    })
})