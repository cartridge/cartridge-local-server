/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	//Browser Sync options object
	//https://www.browsersync.io/docs/options

	var taskConfig = {
		//Server config options
		server: {
			baseDir: projectConfig.dirs.build,
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
