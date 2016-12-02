define({
    environments: [
        { browserName: 'chrome', version: ['33', 'latest'], platform: ['Linux', 'Windows 10', 'OS X 10.11'] },
        { browserName: 'firefox', version: ['29', 'latest'], platform: ['Linux', 'Windows 10', 'OS X 10.11'] },
        { browserName: 'MicrosoftEdge', version: ['13', 'latest'], platform: 'Windows 10' },
        { browserName: 'safari', version: ['9', 'latest'], platform: 'OS X 10.11' }
    ],

	tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

	reporters: ['Runner', 'Console'],

	suites: ['tests/unit/index'],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
