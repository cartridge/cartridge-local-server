# Cartridge local server [![Build Status](https://travis-ci.org/cartridge/cartridge-local-server.svg?branch=master)](https://travis-ci.org/cartridge/cartridge-local-server)

> local-server expansion pack for [Cartridge](https://github.com/cartridge/cartridge)

To use this module, you will need [cartridge-cli](https://github.com/cartridge/cartridge-cli) installed and have a cartridge project setup.

```sh
npm install cartridge-local-server --save-dev
```

This module adds the following to a project:

* __TASK DESCRIPTION__
* __TASK DESCRIPTION__
* __TASK DESCRIPTION__

## Config

Once installed, the config file `task.local-server.js` is created and stored in the `_config` directory in the root of your cartridge project.

* * *

## Usage

__USAGE DESCRIPTION__

* * *

## Development

### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing.

### ESLint
By default `task.js` and `.js` files within `_config` are linted using ESLint. These checks are run by travis and will fail the build if errors are found.

To manually check for errors run
```sh
npm run lint
```

If you are getting an error that you don't understand then try looking at the [JSLint Error Explanations](http://jslinterrors.com/) site or the [ESLint rules page](http://eslint.org/docs/rules/). The linting rules are in place for a reason. If you have a specific use case where you need to violate one then disable the linter in place rather than removing the rule. In addition leave a comment explaining the reasoning for disabling the linter.
```javascript
/*eslint no-extend-native: "off"*/
// We are polyfilling native functionality for older browsers
if (!Element.prototype.addEventListener) {
	Element.prototype.removeEventListener = function (sEventType, fListener) {
		...
	}
}
/*eslint no-extend-native: "error"*/
```
If you add further JavaScript files to this module then please add them to the linting command defined in `package.json`.
