/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
		baseDir: projectConfig.dirs.build
	};

	return taskConfig;
}

module.exports = getTaskConfig;
