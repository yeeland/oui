# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [Unreleased][unreleased]
### Added
- [Patch] Add a `.lego-pane--scroll-x` for setting `overflow-x` to `auto`.

### Fixed
- [Patch] Fix the name of the npm module and changed the privacy setting to false.

## [0.0.2][0.0.2] - 2015-07-13
### Fixed
- [Patch] Fix the broken links in `CHANGELOG.md`. (#60)

### Changed
- [Patch] `.lego-popover` was dependant on `.lego-block-list-group` for styling its `border`, `border-radius`, and `padding` of child elements, however this added other undesired styles to `.lego-popover`. This change removes the link between `.lego-popover` and `.lego-block-list-group`.

### Added
- [Patch] Add Travis CI support to the LEGO repository.
- [Patch] Update `CONTRIBUTING.md` to include information on Git tags
- [Patch] Updated README.md to include example code and usage instructions.
- [Patch] Added `src/scss/core.scss` file so that Core could be compiled.
- [Patch] Added `sass` task to gulpfile.js to compile Core.
- [Patch] Added `npm start` script into `package.json` to run tests.
- [Patch] Added `npm start` script into `package.json` to run install processes.

### Removed
- [Patch] Removed unneeded gems from Gemfile.

## 0.0.1 - 2015-06-24
### Added
- [Patch] Use semantic versioning in LEGO (#58).

[unreleased]: https://github.com/optimizely/lego/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/optimizely/lego/compare/v0.0.1...v0.0.2
