const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    projectId: 'umj6vb',
    // cypress dashboard org name - CypressTesters
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    reporter: "mochawesome",
    retries: {
      runMode: 1,
      openMode: 1
    },
    e2e: {
      // change the baseUrl from command line using this command - cypress run --config baseUrl=https://example.com/my-app-staging

      baseUrl: "https://rahulshettyacademy.com",
      // If we custom folder name instead of e2e, we can use specPattern key to let cypress know that
      // specPattern: 'cypress/integration/examples/*.js'

      setupNodeEvents(on, config) {
        // implement node event listeners here for cucumber BDD tests
        // on('file:preprocessor', cucumber())
      },
      // To identify Cucumber BDD Files
      // for cucumber feature files, change e2e folder name to integration folder name
      // specPattern: 'cypress/integration/examples/BDD/*.feature',
      env: {
        login_url: '/login',
      }
    },
});
