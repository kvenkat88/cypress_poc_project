const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: 'umj6vb',
    // cypress dashboard org name - CypressTesters
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    //reporter: "mochaawesome",
    retries: {
      runMode: 1,
      openMode: 1
    },
    e2e: {
      // change the baseUrl from command line using this command - cypress run --config baseUrl=https://example.com/my-app-staging

      baseUrl: "https://rahulshettyacademy.com",
      // If we custom folder name instead of e2e, we can use specPattern key to let cypress know that
      // specPattern: 'cypress/integration/examples/*.js'

      // setupNodeEvents(on, config) {
      //   // implement node event listeners here
      // },
      env: {
        login_url: '/login',
      }
      


    },
});
