const { defineConfig } = require("cypress");
const fs = require('fs')
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: 'Cypress Reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: "https://unsplash.com/",
    projectId: "",
    specPattern: "**/*.cy.js",
    chromeWebSecurity: false,
    video: false,
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    downloadsFolder: "cypress/downloads",
    env: {
      baseUrl: "https://unsplash.com/",
      apiUrl: "https://api.unsplash.com",
      email: "huyy.tran0801@gmail.com",
      password: "hy29012020",
      access_token: "u-f4ZbTWjZcwcD2NntIq2FwgHl_R1Rp1E96mOuh2Vmk"
    },
  },
});
