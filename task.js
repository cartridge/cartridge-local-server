'use strict';
/* ============================================================ *\
	 MODULE NAME
\* ============================================================ */

// Gulp dependencies
var path = require('path');

// Module dependencies
var browserSync = require('browser-sync');

module.exports = function(gulp, projectConfig, tasks) {

	/* --------------------
	*	CONFIGURATION
	* ---------------------*/

	var TASK_NAME = 'local-server';

	// Task Config
	var taskConfig = require(path.resolve(process.cwd(), projectConfig.dirs.config, 'task.' + TASK_NAME + '.js'))(projectConfig);

	/* --------------------
	*	MODULE TASKS
	* ---------------------*/

	gulp.task(TASK_NAME, function() {
	  browserSync.init({
	    server: {
	      baseDir: taskConfig.baseDir
	    }
	  });
	});

	/* ----------------------------
	*	CARTRIDGE TASK MANAGEMENT
	* -----------------------------*/

	// Add the task to the default list
	tasks.default.push(TASK_NAME);
	// Add the task to the watch list
}
