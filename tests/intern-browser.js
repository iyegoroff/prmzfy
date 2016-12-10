define({
    environments: [
        {
            browserName: 'iphone',
            version: ['8.1', '9.2'],
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'android',
            version: ['4.4', '5.1'],
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'chrome',
            version: ['31', '32', '48'],
            platform: ['Linux', 'Windows 10', 'OS X 10.11'],
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'firefox',
            version: ['28', '29', '45'],
            platform: ['Linux', 'Windows 10', 'OS X 10.11'],
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'MicrosoftEdge',
            version: ['13', '14'],
            platform: 'Windows 10',
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'safari',
            version: ['9', '10'],
            platform: 'OS X 10.11',
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'safari',
            version: ['7'],
            platform: 'OS X 10.9',
            recordVideo: false,
            recordScreenshots: false
        },
        {
            browserName: 'internet explorer',
            version: ['11'],
            platform: 'Windows 7',
            recordVideo: false,
            recordScreenshots: false
        }
    ],

    tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

    reporters: ['Runner'],

    suites: ['tests/unit/index'],

    excludeInstrumentation: /^(?:tests|node_modules)\//
});
