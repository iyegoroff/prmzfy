define({
    tunnel: 'NullTunnel',

    reporters: [
        {
            id: 'node_modules/remap-istanbul/lib/intern-reporters/JsonCoverage',
            filename: 'coverage/coverage-final.json'
        }
    ],

    suites: ['tests/unit/index'],

    excludeInstrumentation: /^(?:tests|node_modules)\//
});
