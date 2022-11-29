const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
    },
    env: {
      formUrl: 'https://share.hsforms.com/1-79TdZVpS9igd9mdtdea5w1khjs'
    }
  },
});
