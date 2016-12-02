define({
    environments: [
        { browserName: 'chrome', version: ['33', 'latest'], platform: ['Linux', 'Windows 10', 'MacOS El Capitan 10.11'] },
        { browserName: 'firefox', version: ['29', 'latest'], platform: ['Linux', 'Windows 10', 'MacOS El Capitan 10.11'] },
        { browserName: 'msedge', version: ['12', 'latest'], platform: 'Windows 10' },
        { browserName: 'safari', version: ['7.1', 'latest'], platform: 'MacOS El Capitan 10.11' }
    ],

	tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

	reporters: ['Runner', 'Console'],

	suites: ['tests/unit/index'],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
