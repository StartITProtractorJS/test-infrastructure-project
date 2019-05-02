exports.config = {
    specs: ["./tests/*.js"],
    sync: true,
    services: ["selenium-standalone"],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    reporters: ["spec"],
    baseUrl: "http://localhost:30030",
    framework: "mocha",
    logLevel: "silent",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000 // in ms
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    afterTest: function(test) {
        // faster than reload browser
        // browser.execute('window.localStorage.clear(); window.sessionStorage.clear()')
        // browser.refresh()

        browser.reloadSession();
    }
};
