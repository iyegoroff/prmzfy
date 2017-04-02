define({
    environments: [
        {
            browserName: 'Safari',
            appiumVersion: '1.6.3',
            recordVideo: false,
            recordScreenshots: false,
            deviceName: 'iPhone Simulator',
            deviceOrientation: 'portrait',
            platformVersion: ['9.3', '10.2'],
            platformName: 'iOS'
        },
        {
            browserName: 'Browser',
            appiumVersion: '1.6.3',
            recordVideo: false,
            recordScreenshots: false,
            deviceName: 'Android Emulator',
            deviceOrientation: 'portrait',
            platformVersion: ['4.4', '5.1', '6.0'],
            platformName: 'Android'
        }
        // {
        //     browserName: 'iphone',
        //     version: ['8.1', '9.2'],
        //     recordVideo: false,
        //     recordScreenshots: false
        // },
        // {
        //     browserName: 'android',
        //     version: ['4.4', '5.1'],
        //     recordVideo: false,
        //     recordScreenshots: false
        // },
        // {
        //     browserName: 'chrome',
        //     version: ['31', '32', '54'],
        //     platform: ['Windows 10'],
        //     recordVideo: false,
        //     recordScreenshots: false
        // },
        // {
        //     browserName: 'firefox',
        //     version: ['28', '29', '50'],
        //     platform: ['Windows 10'],
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
        //     browserName: 'safari',
        //     version: ['7'],
        //     platform: 'OS X 10.9',
        //     recordVideo: false,
        //     recordScreenshots: false
        // },
        // {
        //     browserName: 'internet explorer',
        //     version: ['11'],
        //     platform: 'Windows 7',
        //     recordVideo: false,
        //     recordScreenshots: false
        // }
    ],

    tunnel: 'SauceLabsTunnel',

    maxConcurrency: 5,

    reporters: ['Runner'],

    suites: ['tests/unit/index'],

    excludeInstrumentation: /^(?:tests|node_modules)\//
});
