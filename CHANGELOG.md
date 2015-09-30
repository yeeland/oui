# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [5.0.0][5.0.0] - 2015-09-28
### Added
- [Patch] Adding `watch` process so that Sass changes will compile automatically. To use run `gulp watch`.

### Deprecated
- [Patch] Adding `_buttons--deprecated.scss` to temporarily retain the `button--dismiss` styling.

## Changed
- [Patch] Removed unneeded `!important` on colors by using `:visited` to fix conflicts with anchors styled as buttons.
- [Release] Updating buttons to use new styling, `button--dismiss` is now `button--plain`.
- [Patch] Removing `button--extra`. It is not used in the app and is not needed.

## [4.0.1][4.0.1] - 2015-09-22
### Fixed
- [Patch] Added back a reference to the `_borders.scss` file. (#127)
- [Patch] Fixes bug in previous release that caused the height of `lego-select` to be too large in FF/IE.

### Deprecated
- [Patch] Adding `_layout--deprecated.scss` to temporarily retain the `lego-pane...` classes (#70)
- [Patch] Adding `_sizing--deprecated.scss` to temporarily retain the `width/height-` trumps. (#69)
- [Patch] Adding `_flexbox--deprecated.scss` to temporarily retain the `flex-` classes.
- [Patch] Adding instructions in CONTRIBUTING.md about how to handle deprecated code.

## [4.0.0][4.0.0] - 2015-09-14
### Added
- [Patch] `em` italic
- [Release] Rebuilding flexbox mixins/classes, removing `lego-pane...` classes. (#70)
- [Release] Provide an optional namespacing variable. (#68)
- [Feture] Added two layout mixins/classes for centering. (#116)
- [Release] Make add/remove table row more robust, fix bugs. (#119)
- [Patch] Added `height--1-1` trump class to allow for `height: 100%`.
- [Patch] Adding class to make input/textarea disabled appearance the same when using classes or disabled attr. (#117)

### Changed
- [Release] Removed `.input--disabled` in favor of extending both `.text-input` & `.textarea` with `--disabled`. (#117)
- [Release] Rename `.informative` to `.cursor--help`. (#73)

### Fixed
- [Patch] Removing `outline: none` from buttons. (#89)
- [Patch] Clarify the "Releasing a new version of LEGO" steps. (#111)
- [Patch] Clarify `CONTRIBUTING.md` to suggest only pushing the newly created tag. (#107)
- [Patch] Fixes alignment of `lego-icon` inside `lego-button`.
- [Patch] Fixes height of `lego-select` by adding `box-sizing: content-box;` so height will be calculated the same as `lego-button`.

## [3.1.0][3.1.0] - 2015-09-02
### Added
- [Feature] Add explanations to Patch, Feature, and Release in `CONTRIBUTING.md`. (#110)

### Changed
- [Patch] `.lego-button--highlight` changed from green to bue

## [3.0.0][3.0.0] - 2015-09-01
### Added
- [Patch] Add "Charcoal" color `#383838`.
- [Patch] Checks to see if `$include-fonts` map exists. Allows usage of Lego without being forced to include brand font. (#90)
- [Feature] Adding namespace variable so we can use 'lego-' or 'oui-' or no prefix. (#68)
- [Feature] Removing `lego-` from mixins that used it: grid, matrix, media. Use of this mixin will have to be updated.

### Removed
- [Release] Remove `.lego-tag` from Core. (#72)

### Changed
- [Patch] Bump font weight for `.weight--bold` class to `600` so its the same as a `<b>` tag.
- [Patch] Updated font styles for `.lego-table th`
- [Patch] Migrate from Travis CI legacy to container-based infrastructure.

### Fixed
- [Patch] Change the weight of `<b>` and `<strong>` tags to `600`.

## [2.0.0][2.0.0] - 2015-08-18
### Changed
- [Release] Major refactor of button styles and class names. New available class names are `.lego-button--highlight`, `lego-button--outline`, `.lego-button--outline-reverse`, `.lego-button--extra`, `.lego-button--dismiss`. `.lego-button--brand` has been deprecated. Usage for classes to follow shortly. (#92) (#85) (#74)
- [Release] Added `!important` to buttons so that when used as anchors the color is consistent.

## [1.0.0][1.0.0] - 2015-08-18
### Fixed
- [Patch] Change comments in `_spinner.scss` to refer to `.lego-overlay` since `.lego-spinner-wrap` doesn't exist. (#76)
### Added
- [Release] Add namespacing variable to Core (#68).

### Changed
- [Patch] Removed concatenation from the `@font-face` URL strings because it was breaking the SCSS parser used for documentation generation.
- [Release] Renaming sizing trumps to be BEM consistent. (#69)

### Removed
- [Patch] Remove old gitignore targets from js days. (#97)

## [0.0.3][0.0.3] - 2015-08-05
### Added
- [Patch] Add a `.lego-pane--scroll-x` for setting `overflow-x` to `auto`.
- [Patch] Add a `.pointer-events--none` trump for disabling pointer events.
- [Patch] Add a `.cursor--move` trump for changing the cursor to `move`.
- [Patch] Allow `.lego-overlay` to be extended with `%lego-overlay`.

## Changed
- [Patch] Moved `_borders.scss` from `components` to `trumps` and added `!important`.

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

[unreleased]: https://github.com/optimizely/lego/compare/v5.0.0...HEAD
[0.0.2]: https://github.com/optimizely/lego/compare/v0.0.1...v0.0.2
[0.0.3]: https://github.com/optimizely/lego/compare/v0.0.2...v0.0.3
[1.0.0]: https://github.com/optimizely/lego/compare/v0.0.3...v1.0.0
[2.0.0]: https://github.com/optimizely/lego/compare/v1.0.0...v2.0.0
[3.0.0]: https://github.com/optimizely/lego/compare/v2.0.0...v3.0.0
[3.1.0]: https://github.com/optimizely/lego/compare/v3.0.0...v3.1.0
[4.0.0]: https://github.com/optimizely/lego/compare/v3.1.0...v4.0.0
[4.0.1]: https://github.com/optimizely/lego/compare/v4.0.0...v4.0.1
[5.0.0]: https://github.com/optimizely/lego/compare/v4.0.1...v5.0.0
