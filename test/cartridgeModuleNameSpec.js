/*eslint-env node, mocha */

var path   = require('path');
var chai   = require('chai');
var expect = chai.expect;
var fs = require('fs-extra');

chai.use(require('chai-fs'));
chai.should();

var MOCK_PROJECT_DIR = path.join(process.cwd(), 'test', 'mock-project');

process.chdir(MOCK_PROJECT_DIR);

/**
 * Test the inner workings of the module
 * Check if tasks have been registered with gulp
 */

describe('As a gulpfile', function() {
	describe('when a task is included', function() {
		var basicrunner;

		before(function(done) {
			basicrunner = require(path.resolve(process.cwd(), 'basicrunner.js'));

			done();
		});

		it('should add one task to the default group', function() {
			expect(basicrunner.tasks.default.length).to.equal(1);
		});

		it('should add the base task to the default group', function() {
			expect(basicrunner.tasks.default[0]).to.equal('base');
		});

		it('should add one task to the watch group', function() {
			expect(basicrunner.tasks.watch.length).to.equal(1);
		});

		it('should add the watch:base task to the watch group', function() {
			expect(basicrunner.tasks.watch[0]).to.equal('watch:base');
		});
	});
});

/**
 * Test the output of the module.
 * Check if files / directories are created
 */

describe('As a user of the cartridge-base module', function() {
	var gulprunner = require(path.resolve(process.cwd(), 'gulprunner.js'));

	function cleanUp() {
		// fs.remove('/path/to/dir/or/file');
		// fs.removeSync('/path/to/dir/or/file');
	}

	this.timeout(10000);

	describe('when runing `gulp`', function() {

		before(function(done) {
			//Uncomment one of the lines below
			// Simulate running gulp WITH --prod flag
			// gulprunner.setProd();
			// Simulate running gulp WITHOUT --prod flag
			// gulprunner.setDev();

			//Run the gulp task defined in gulprunner.js
			gulprunner.run(done);
		});

		//Clean up function
		after(cleanUp);

		it('should generate a file', function() {
			// expect('/path/to/dir').to.be.a.file();
		});

	})

});
