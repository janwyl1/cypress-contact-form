const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      formUrl: 'https://share.hsforms.com/1-79TdZVpS9igd9mdtdea5w1khjs'
    }
  },
});
