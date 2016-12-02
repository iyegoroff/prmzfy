define({
    environments: [
        { 
            browserName: 'chrome', 
            version: ['33', '48'], 
            platform: ['Linux', 'Windows 10', 'OS X 10.11'],
            recordVideo: false,
            recordScreenshots: false
        },
        { 
            browserName: 'firefox', 
            version: ['29', '45'], 
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
        }
    ],

	tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

	reporters: ['Runner', 'Console'],

	suites: ['tests/unit/index'],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
