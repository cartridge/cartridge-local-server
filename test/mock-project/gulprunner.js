// Gulp
var gulp = require('gulp');
var path = require('path');

// Tasks
var tasks         = {};
tasks.default     = [];
tasks.watch       = [];

// Config
var config        = require(path.resolve(process.cwd(), '_config/project.json'));

config.cleanPaths = [];
config.creds      = require(path.resolve(process.cwd(), '_config/creds.json'));

config.isProd               = false;
config.isWatched            = false;
config.dirs.config          = path.resolve('..', '..', config.dirs.config) + '/';
config.dirs.src             = path.resolve(process.cwd(), config.dirs.src) + '/';
config.dirs.dest            = path.resolve(process.cwd(), config.dirs.dest) + '/';

require(path.resolve(process.cwd(), '..', '..', 'task.js'))(gulp, config, tasks);

module.exports = {
	setProd: function(){
		config.isProd = true;
	},
	setDev: function(){
		config.isProd = false;
	},
	run: function(callback) {
		gulp.start('base', function(){
			callback();
		});
	}
};
