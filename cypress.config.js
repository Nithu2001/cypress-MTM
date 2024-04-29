const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    
    baseUrl:'https://ccentappsp35.computacenter.com:93/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
