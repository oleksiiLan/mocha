//...///<reference types="cypress">  - for autocomplete
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080, //sreen resolution
  viewportWidth: 1920,  //screen resolution
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});