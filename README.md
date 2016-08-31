# Base Module [![Build Status][travis-image]][travis-url]

> Starting point for a base [Cartridge](https://github.com/cartridge/cartridge) module

## Setup for a new module
[Create a new empty repository](https://github.com/new) for your expansion pack.

Clone this repository, giving the name of the new module - prefixed with the word `cartridge-`. This will be the name of the folder the source is cloned into.
```sh
git clone https://github.com/cartridge/base-module.git cartridge-my-module
```

Setup your local git repo

```sh
# Go into the cloned repo
cd cartridge-my-module
# Reconstruct repo to remove base-module git history
rm -rf .git
git init
git add .
git commit -m "feat: Initial commit"
# Add the remote origin URL to the new repo
git remote add origin https://github.com/cartridge/cartridge-my-module.git
# Check new origin URL is set
git remote -v
# Push to the new repo
git push -u origin master
```

Set `NODE_ENV`to `development` - this is so none of the postinstall scripts run when installing dependencies.

```sh
# Linux / OS X
export NODE_ENV=development

# Windows
set NODE_ENV=development

# Windows Powershell
$env:NODE_ENV="development"
```

Install dependencies
```sh
npm install
```

And do some coding!


## Development on the base module
Clone repository
```sh
git clone https://github.com/cartridge/base-module.git
```

Set `NODE_ENV`to `development` - this is so none of the postinstall scripts run when installing dependencies.

```sh
# Linux / OS X
export NODE_ENV=development

# Windows Command Prompt
set NODE_ENV=development
# Windows Powershell
$env:NODE_ENV="development"
```

Install dependencies
```sh
cd base-module
npm install
```

And do some coding!

### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing. This also supports commit message signing.


[travis-url]: https://travis-ci.org/cartridge/base-module
[travis-image]: https://travis-ci.org/cartridge/base-module.svg?branch=master
