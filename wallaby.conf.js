process.env.NODE_ENV = 'test';

module.exports = function() {
	return {
		// Let Wallaby configure itself for Node's built-in test runner
		// (https://wallabyjs.com/docs/integration/node-test/, needs Node >= 22.3.0)
		autoDetect: ['node:test'],

		// The unit tests work with inline fixtures only; `test/fixtures` holds the
		// local, git-ignored dummy files for the manual CLI check (see README.md)
		files: {
			override: (filePatterns) => [...filePatterns, '!test/fixtures/**']
		},

		env: {
			type: 'node',
			// Use the node executable found on PATH instead of a hard-coded path
			runner: 'node'
		}
	}
};
