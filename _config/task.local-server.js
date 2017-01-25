/* jshint node: true */

'use strict';

var path = require('path');

function getTaskConfig(projectConfig) {
	// Browser Sync options object
	// https://www.browsersync.io/docs/options

	var taskConfig = {
		// Files to watch
		files: path.join(__dirname + '/..', projectConfig.dirs.dest),
		// Server config options
		server: {
			baseDir: path.join(__dirname + '/..', projectConfig.paths.dest.static_html),
			// directory: true, // directory listing
			// index: "index.htm", // specific index filename
		},
		ghostMode: false, // Mirror behaviour on all devices
		online: false, // Speed up startup time (When xip & tunnel aren't being used)
		// notify: false // Turn off UI notifications
		// browser: 'google chrome' //Set what browser to open on start - https://www.browsersync.io/docs/options#option-browser
		// open: false // Stop browser automatically opening
	};

	return taskConfig;
}

module.exports = getTaskConfig;
