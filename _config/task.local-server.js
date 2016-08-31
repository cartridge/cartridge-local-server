/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
		server: {
			baseDir: taskConfig.baseDir
		}
	};

	return taskConfig;
}

module.exports = getTaskConfig;
