# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [Unreleased][unreleased]
### Added
- [Patch] Add "Charcoal" color `#383838`.

### Removed
- [Release] Remove `.lego-tag` from Core. (#72)

### Changed
- [Patch] Bump font weight for `.weight--bold` class to `600` so its the same as a `<b>` tag.

## [2.0.0][2.0.0] - 2015-08-18
### Changed
- [Release] Major refactor of button styles and class names. New available class names are '.lego-button--highlight', '.lego-button--outline', '.lego-button--outline-reverse', '.lego-button--extra', '.lego-button--dismiss'. '.lego-button--brand' has been deprecated. Useage for classes to follow shortly. (#92) (#85) (#74)
- [Release] Added `!important` to buttons so that when used as anchors the color is consistent.

## [1.0.0][1.0.0] - 2015-08-18
### Fixed
- [Patch] Change comments in `_spinner.scss` to refer to `.lego-overlay` since `.lego-spinner-wrap` doesn't exist. (#76)

### Changed
- [Patch] Removed concatenation from the `@font-face` URL strings because it was breaking the SCSS parser used for documentation generation.
- [Release] Renaming sizing trumps to be BEM consistent. (#69)

### Removed
- [Patch] Remove old gitignore targets from js days. (#97)
>>>>>>> master

## [0.0.3][0.0.3] - 2015-08-05
### Added
- [Patch] Add a `.lego-pane--scroll-x` for setting `overflow-x` to `auto`.
- [Patch] Add a `.pointer-events--none` trump for disabling pointer events.
- [Patch] Add a `.cursor--move` trump for changing the cursor to `move`.
- [Patch] Allow `.lego-overlay` to be extended with `%lego-overlay`.

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

[unreleased]: https://github.com/optimizely/lego/compare/v2.0.0...HEAD
[0.0.2]: https://github.com/optimizely/lego/compare/v0.0.1...v0.0.2
[0.0.3]: https://github.com/optimizely/lego/compare/v0.0.2...v0.0.3
[1.0.0]: https://github.com/optimizely/lego/compare/v0.0.3...v1.0.0
[1.0.0]: https://github.com/optimizely/lego/compare/v1.0.0...v2.0.0
