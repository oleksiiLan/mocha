//...///<reference types="cypress">  - for autocomplete
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1920, //sreen resolution
  viewportWidth: 1080,  //screen resolution
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});