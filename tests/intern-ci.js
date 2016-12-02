define({
    environments: [
        { browserName: 'chrome', version: ['33', 'latest'], platform: ['Linux', 'Windows', 'MacOS'] }
    ],

	tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

	reporters: ['Runner', 'Console'],

	suites: ['tests/unit/index'],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
