define({
	environments: [
		{ browserName: 'chrome' },
		{ browserName: 'firefox' }
	],

	maxConcurrency: 2,

	tunnel: 'NullTunnel',

	reporters: ['Runner', 'Console'],

	suites: [ 'tests/unit/index' ],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
