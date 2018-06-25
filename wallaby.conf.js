process.env.NODE_ENV = 'test';

module.exports = function(wallaby) {
	return {
		files: [
			'lib/**/*.js',
			'test/fixtures/**/*'
		],

		tests: [
			'test/*.js',
			'test/**/*.js'
		],

		testFramework: 'mocha',

		env: {
			type: 'node',
			runner: '/usr/local/bin/node'
		}
	}
};
