define({
	tunnel: 'NullTunnel',

	reporters: ['Runner', 'Console'],

	suites: ['tests/unit/index'],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
