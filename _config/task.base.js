/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
		someProperty: projectConfig,
		src:          './module-thing.ext',
		watch:        []
	};

	return taskConfig;
}

module.exports = getTaskConfig;
