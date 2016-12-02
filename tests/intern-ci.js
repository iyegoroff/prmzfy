define({
    environments: [
        {
            browserName: 'Browser',
            recordVideo: false,
            recordScreenshots: false,
            deviceName: 'Android Emulator',
            platformVersion: '5.1',
            platformName: 'Android'
        }
        // { 
        //     browserName: 'chrome', 
        //     version: ['33', '48'], 
        //     platform: ['Linux', 'Windows 10', 'OS X 10.11'],
        //     recordVideo: false,
        //     recordScreenshots: false
        // },
        // { 
        //     browserName: 'firefox', 
        //     version: ['29', '45'], 
        //     platform: ['Linux', 'Windows 10', 'OS X 10.11'],
        //     recordVideo: false,
        //     recordScreenshots: false
        // },
        // { 
        //     browserName: 'MicrosoftEdge', 
        //     version: ['13', '14'], 
        //     platform: 'Windows 10',
        //     recordVideo: false,
        //     recordScreenshots: false 
        // },
        // { 
        //     browserName: 'safari', 
        //     version: ['9', '10'], 
        //     platform: 'OS X 10.11',
        //     recordVideo: false,
        //     recordScreenshots: false 
        // },
        // {
        //     browserName: 'Safari',
        //     appiumVersion: '1.6.1',
        //     recordVideo: false,
        //     recordScreenshots: false,
        //     deviceName: 'iPhone Simulator',
        //     deviceOrientation: 'portrait',
        //     platformVersion: '10.0',
        //     platformName: 'iOS'
        // },
        // {
        //     browserName: 'Browser',
        //     appiumVersion: '1.5.3',
        //     recordVideo: false,
        //     recordScreenshots: false,
        //     deviceName: 'Android Emulator',
        //     deviceOrientation: 'portrait',
        //     platformVersion: '5.1',
        //     platformName: 'Android'
        // }
    ],

	tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

	reporters: ['Runner', 'Console'],

	suites: ['tests/unit/index'],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
