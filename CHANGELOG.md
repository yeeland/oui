# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [Unreleased][Unreleased]
### Added
- [Feature] Created Token react component.

## [13.1.1][13.1.1] - 2016-07-22
### Fixed
- [Patch] Export the `ButtonRow` and `Table` components.

## [13.1.0][13.1.0] - 2016-07-22
### Added
- [Feature] Add a `tiny` sized button. (#454)
- [Patch] Add more examples to the React documentation. (#460)
- [Feature] Add optional "Copy" button to Code component. (#453)
- [Feature] Add `ButtonRow` React component, example and test. (#463)

### Fixed
- [Patch] Fix tiny README mistakes. (#451)
- [Patch] Add selector for `oui-button` in `_button-row.scss`. (#455)

## [13.0.1][13.0.1] - 2016-07-13
### Added
- [Patch] Add Google Analytics to React documentation. (#448)

### Fixed
- [Patch] Add `highlight.js` to dependencies, not devDependencies. (#446)
- [Patch] Fix paths to static assets in React documentation so it doesn't assume it's hosted at the server root. (#444)

## [13.0.0][13.0.0] - 2016-07-13
### Added
- [Feature] Extend `Code` React component to accept a language. (#433)

### Changed
- [Patch] Create automatically generated React documentation that uses React components. (#431)

### Fixed
- [Patch] Update SCSS to add selectors for `.oui-button` where `.#{$namespace}button` is used. (#441)
- [Patch] Update outdated references to `npm run react:serve`. (#440)

## [13.0.0-rc.3][13.0.0-rc.3] - 2016-07-05
### Added
- [Feature] Add syntax highlighting option to React `Code` component.
- [Feature] Add a new `Table` React component.

### Fixed
- [Patch] Update instructions for deploying beta versions of OUI.

## [13.0.0-rc.2][13.0.0-rc.2] - 2016-07-01
### Added
- [Patch] Add documentation about releasing beta versions of OUI.

## [13.0.0-rc.1][13.0.0-rc.1] - 2016-07-01
### Added
- [Release] Add React to the OUI codebase. (#378)
- [Release] Add Jest and the ESLint React plugin. (#378)
- [Release] Add automatically generated React component documentation that gets deployed when new versions are released.
- [Release] Create six React components: ArrowsInline, Attention, Button, Code, Input, and Label. (#378)
- [Feature] Begin prefixing classes that React uses with the `oui-` prefix. (#361)

### Changed
- [Patch] Update `CONTRIBUTING.md` to include information about updating Optimizely's `package.json` after a release. (#408)
- [Patch] Remove `devDependencies` before publishing OUI to NPM to increase speed of `npm install` for applications using OUI. (#356)
- [Patch] Change release process guidelines to make upgrades less painful. (#360)

### Fixed
- [Patch] Add note to `README.md` saying that ScribeSass is internal only. (#359)
- [Patch] Take a pass through our markdown files and update outdated information.

## [12.2.0][12.2.0] - 2016-06-24
### Added
- [Feature] Add dropup option for dropdowns. (#425)

## [12.1.0][12.1.0] - 2016-06-22
### Added
- [Feature] Add OUI overrides for Select2 plugin to library directory. (#421)

## [12.0.0][12.0.0] - 2016-06-17
### Added
- [Release] Admin color helpers as separate partial, also added better HTML examples. Renamed class, so it's a breaking change.
- [Feature] Add token styles from V2.
- [Feature] Add badge styles from V2.

## [11.5.0][11.5.0] - 2016-06-16
### Added
- [Feature] Add admin color from v1 and admin helper classes (#414)

## [11.4.0][11.4.0] - 2016-06-01
### Added
- [Feature] Restore `_search.scss` and icon to make search inputs more clear. (#400)

### Changed
- [Patch] Explicitly define the placeholder colors and add support to style CodeMirror's fake placeholders. (#405)

### Fixed
- [Patch] Update styling of jQuery datepicker in `_datepicker.scss`.
- [Patch] Tighten Dropdown line-height to work better for 3-line descriptions. (#403)

## [11.3.1][11.3.1] - 2016-05-12
### Fixed
- [Patch] Change text-shadow offset of highlight buttons to match danger button. (#398)

## [11.3.0][11.3.0] - 2016-04-19
### Added
- [Feature] Added `--small` variation of `progress-dots`

## [11.2.0][11.2.0] - 2016-04-18
### Added
- [Feature] Add draft and live background color helpers (#376)

### Removed
- [Patch] Remove linter pre-commit hook to avoid annoying Ruby dependency. (#370)

## [11.1.0][11.1.0] - 2016-04-12
### Changed
- [Patch] Restyle button focus to be more consistent with other inputs. (#355)
- [Patch] Fix color of button focus to actually be consistent.
- [Feature] Updated popover content to have smaller body font size and specifications for a footer. Changed size of ($line-height, tight) variable.

## [11.0.0][11.0.0] - 2016-04-11
### Added
- [Feature] Add `.dropdown--descriptive` class to support dropdown with sentences of text inside. (#352)
- [Feature] Adding new style of loader, called `progress-dots`. (#347)
- [Feature] Add ESLint to repository and updated JavaScript to follow the rules. (#357)
- [Feature] Added `.flex--dead-center` to center an element vertically and horizontally. (#342)

### Changed
- [Patch] Dropdown items no longer have `whitespace: nowrap` applied. Text will wrap freely and the width, unless defined elsewhere, will be the width of the element that opens the dropdown. (#352)
- [Release] Renamed `progress.scss` to `progress-bar.scss`.
- [Patch] Change "Progress" to "Progress Bar" in documentation.
- [Patch] Change hex value for variable `brand-dark` to match one of the Optimizely brand colors. (#349)
- [Patch] Revert part of a commit to `.button-group` that introduced a bug in v10.0.0. (#137)
- [Patch] Replace `gulp lint` task with NPM scripts. (#321)
- [Patch] Change default scss-lint severity so warnings are thrown as errors and break the build. (#351)
- [Patch] Update to latest scss-lint.
- [Patch] Add a `.ruby-version` file for rbenv to use.

### Fixed
- [Patch] Fix issue where tabs border was not appearing ebcause of CSS issues. (#343, #345)

## [10.0.0][10.0.0] - 2016-03-29
### Added
- [Feature] Autoprefixer, removing all mixins that previously provided prefixes. (#240)
- [Feature] Adding new white-space trump. (#223)
- [Feature] Adding `icon-target` to provide a hover state for standalone, clickable icons.
- [Patch] Adding namespace option in oui javascript. (#255)
- [Patch] Add more ScribeSass comments.
- [Feature] Adding `vertical-align: text-top` to help with inline icon alignment. (#299)
- [Patch] Adding `line-height` and `font-weight` to dropdowns so they retain styling when nested. (#292)
- [Patch] Added more clarity around `oui-extras.css` in README. (#232)
- [Patch] Added reference and link to documenation. (#231)
- [Patch] Added `.overflow-y--scroll` trump.

### Changed
- [Release] Using simplified `map-fetch` function and now requires commas after each argument. (#239)
- [Release] Combined different border variables (border color and border-radius) into one object, `$border`, so it can amended downstream. References to `$border-radius` will need to change in apps using OUI. (#156)
- [Patch] Change recommended hotfix procedure to advise branching off of `master` and merging into `master` instead of branching off of `devel`, merging into `devel`, then cherry-picking commits. (#308)
- [Patch] Change README remote CSS examples to use HTTPS. (#293)
- [Release] Change `.wrap` to `.wrap-text` due to class name conflict. (#301)
- [Feature] Moving values for `_icons.scss` into the variables file.
- [Feature] Added `icon--medium` class for 24x24 sized icons.
- [Patch] Move comment about `space-around` that is in the wrong needed. (#180)
- [Patch] Change `CONTRIBUTING.md` to add information about creating GitHub issues to track deprecated code. (#149)
- [Patch] Removing old code from `reset.css`. (#288)
- [Patch] Removing old code from `reset.css`. (#226)
- [Patch] Update README links for documentation and OUI CDN. (#334)
- [Patch] Declaring `hover` state on default buttons so anchors styled as buttons would render identically to buttons. (#303)
- [Release] Removing `_edit-text.scss`. Was not being used. (#275)
- [Release] Removing `box-sizing` from input `type="search"`. Was not needed. (#275)
- [Patch] Move `dependencies` to `devDependencies` in the `package.json`. (#225)
- [Release] Move functions, mixins, and Sass-y things to a `partials/sass/` directory. This change requires updating the main SCSS file that imports the OUI partials and variables. (#259)
- [Release] Rename `_rules.scss` to `_horizontal-rules.scss`. (#271)
- [Release] Move `_array.scss`, `_button-group.scss`, `_button-row.scss`, `_clearfix.scss`, `_flexbox.scss`, `_grid.scss`, `island.scss`, and `_matrix.scss` into a `layout/` directory. (#258)
- [Release] Rename `base/` to `elements/` and move `_buttons.scss` and `_horizontal-rules.scss` into it. (#268)
- [Release] Merge components and objects directory. (#336)
- [Patch] Clean up `package.json`.
- [Patch] Move the `.no-border` classes from layout trumps to border trumps. (#228)

### Fixed
- [Patch] Adding max-height and overflow to dropdowns. (#235).
- [Patch] Using `display:none` on dropdowns so they don't take up any space when on page. (#236).
- [Patch] Decreasing left/right padding on `select` elements so they better align with other form elements. Previously the inherited padding of buttons. (#220).
- [Patch] Adding variable for input padding. (#220).
- [Patch] Add namespace to comments in `_tabs.scss`. (#310)
- [Patch] Add namespace to dropdown code samples that were missing them. (#295).
- [Patch] Make small SCSS comment tweaks to make OUI work in ScribeSass. (#335)
- [Patch] Add step at end of CONTRIBUTING to include merging `master` back into `devel`. (#273)
- [Patch] Adding CSS for nested buttons (like in dropdows) in `button-group` so rounded corners work as expected (#137).
- [Patch] Fix some outdated comments.
- [Patch] Re-add missing variable `pkg` in `deploy.js`. (#210)
- [Patch] Add prefix to code examples for `_code.scss`. (#286)
- [Patch] Fix deploy gulpfile to include merging `master` back into `devel`. (#209)
- [Patch] Remove comment that didn't have any content. (#257)
- [Patch] Fix typo in license.
- [Patch] Remove references to `lego-` in README. (#245)
- [Patch] Fix incorrect width in width--75 sizing class (#244)
- [Patch] Removed extraneous comment (#234)
- [Patch] Tiny documentation fixes. (#234)
- [Patch] Add other input types to input reset. (#261)
- [Patch] Rename an incorrect width class referenced within a comment. (#256)

## Removed
- [Release] Remove unused retina sprites file. (#264)
- [Release] Removing `_search.scss`, not providing much value. HTML change removing extraneous HTML is not required but encouraged. (#290)
- [Patch] Removed `editiable.js` files as they were conflicting with the Ace editor. (#252)
- [Release] Removed `appearance` and `keyframes` mixins since we now use Autoprefixer. (#282)
- [Patch] Removed `--deprecated.scss` files and import references to them. (#229)
- [Release] Remove `.#{$namespace}form--small` (#162)

## [9.0.8][9.0.8] - 2016-03-23
### Changed
- [Patch] Add email address to NPM Travis CI config.

## [9.0.7][9.0.7] - 2016-03-23
### Changed
- [Patch] Force a version of NPM and tweak version detection so that the Travis CI NPM publishing works. (#328)

## [9.0.6][9.0.6] - 2016-03-23
### Changed
- [Patch] Use Travis CI to publish the NPM package. (#328)

## [9.0.5][9.0.5] - 2016-03-23
### Changed
- [Patch] Set ACL on Travis CI uploads so that the files are publicly viewable. (#326)

## [9.0.4][9.0.4] - 2016-03-23
### Changed
- [Patch] Update pre-commit hook to run `npm test` instead of `gulp lint`. (#324)

## [9.0.3][9.0.3] - 2016-03-23
### Changed
- [Patch] Offload deployment tasks to Travis CI and change the commands used to deploy. (#319, #320)

## [9.0.2][9.0.2] - 2016-03-14
### Added
- [Patch] Add OUI icons preview URL to icons SCSS comments. (#287)
- [Patch] Use `oui-icons` NPM package instead of the GitHub URL. (#277)

## [9.0.1][9.0.1] - 2016-02-19
### Fixed
- [Patch] Change `oui-icons` reference in `package.json` to support older versions of NPM. (#222)

## [9.0.0][9.0.0] - 2016-01-19
### Added
- [Feature] Moving gulp tasks into individual files. Adding documenation for each one. (#202)
- [Feature] Add a link to the living OUI documentation in the README. (#177)
- [Feature] Add Travis CI and Gitter badges to README. (#198)

### Changed
- [Release] Moved polyfills from separate folder/partials into the existing `elements/mixins` and `elements/functions` partials. This requires removing polyfill references from apps using OUI. (#185)
- [Feature] Replace existing comments with ScribeSass annotations. (#194)
- [Release] Renaming all instances of `core` to `oui`. This requires changing `core` Sass references in the apps that use OUI. (#183, #184)
- [Patch] Add `<link>` tags to the external OUI examples in the README.
- [Patch] Update `devel` with `master` after deploy using Gulp. (#193)
- [Patch] Updating javascript to remove handlers when not needed in dropdown/popover.
- [Patch] Updating javascript to remove `jQuery.noconflict` as it breaks other jQuery code.

### Fixed
- [Patch] Fix the gulp `.src()` for the AWS S3 deploy. (#192)
- [Patch] Removed outdated information from `CONTRIBUTING.md`. (#193)
- [Patch] Remove comment about `space-around` that isn't needed. (#180)

## [8.0.0][8.0.0] - 2016-01-13
### Added
- [Feature] Adding `.icon--text-align` class to allow inline icons to visually align with the text. E.g., help icons.
- [Feature] Adding an image of our mascot, Louis.

### Changed
- [Patch] Renamed `oui-canvas.css` to `oui.css` and added a `oui-extras.css` file that contains the only the icons that were previously concatenated into `oui-canvas.css`. May contain additional "extras" in the future. (#176, #186)
- [Patch] Push both `oui.css` and `oui-extras.css` to AWS on releases.
- [Patch] Simplifying CSS in `_select.scss` to remove IE hacks.
- [Release] Removed IE10+ mixin in `partials/elements/_mixins.scss` to remove IE hacks. Not being used within OUI.
- [Patch] Update `CONTRIBUTING.md` to include info on hotfixes. (#168)

### Fixed
- [Patch] Removing `config.rb`. (#163)
- [Patch] Remove executable bit from non-executable files. (#161)
- [Patch] Remove some outdated information from `README.md`. (#174)

## [7.1.0][7.1.0] - 2015-12-08
### Changed
- [Feature] Add ability to generate CSS with icons for Canvas and simplify deployment steps.

## [7.0.0][7.0.0] - 2015-12-04
### Added
- [Release] Adding local JS to power components.
- [Feature] Adding new, custom styling for `select` elements. Removed select styling from `_forms.scss`.
- [Feature] Adding mixin to target IE10+.
- [Feature] Adding mixin to disable `appearance` to remove default browser styling from some elements.
- [Release] Adding additional HTML examples to test component javascript.
- [Feature] Adding input variation `_input-icon.scss` so icons can be added to inputs, like a calendar icon for a date picker.
- [Patch] Adding `edit-text` Sass file.
- [Patch] Adding `background--current-color` trump to make the background the current color.

### Changed
- [Patch] Removed `src/img` and `src/wireframe`. SVGs now in `oui-icons`. `wireframe` not being used or maintained.
- [Patch] Removing `box-sizing: content-box` to restore inherited `border-box` value so that height/width sizing is consistent with inputs/selects. Buttons previously did not have a border so it was easier to calculate height based on `content-box`.
- [Patch] Adding line-height variables for buttons to better center text vertically.
- [Release] Changing `accordion.scss` css to be more consistent with javascript conventions.
- [Release] Changing `disclose.scss` css to be more consistent with javascript conventions.
- [Release] Changing `dropdown.scss` css to be more consistent with javascript conventions.
- [Release] Changing `tabs.scss` css to be more consistent with javascript conventions.
- [Release] Changing `popover` to `pop--over` to more consistent with BEM conventions.
- [Release] Changing `poptip` to `pop--tip` to more consistent with BEM conventions.
- [Patch] Changing the default variable poptip width.
- [Patch] Removing right padding from `input-search`. (#158)
- [Feature] Add a license to the repository. (#125)
- [Feature] Adding scrolling variation for tables.

### Fixed
- [Patch] Fix incorrect links in the changelog.

## [6.0.0][6.0.0] - 2015-10-07
### Changed
- [Patch] Updating weight of poptips from not specified to `600`.
- [Patch] Border-radius on buttons now all `2px`.
- [Patch] Adding `narrow` and `tight` button variations so left/right padding can be made smaller.
- [Feature] `matrix` mixin now has 3 optional values to specify number of columns, spacing, and an optional pixel value for responsive, e.g. `matrix(3, 300px)`.
- [Patch] Adding `gulp html-tests` task to test changes to core using live HTML examples.
- [Patch] Adding explanation of `html-tests` into README.md.
- [Patch] Adding fix for Firefox buttons in `_reset.scss`, removing inner padding and border.
- [Release] Rename LEGO to OUI. This creates a new NPM registry and changes the GitHub repository URL. (#130)

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
- [Feature] Added two layout mixins/classes for centering. (#116)
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

[Unreleased]: https://github.com/optimizely/oui/compare/v13.1.1...HEAD
[0.0.2]: https://github.com/optimizely/oui/compare/v0.0.1...v0.0.2
[0.0.3]: https://github.com/optimizely/oui/compare/v0.0.2...v0.0.3
[1.0.0]: https://github.com/optimizely/oui/compare/v0.0.3...v1.0.0
[2.0.0]: https://github.com/optimizely/oui/compare/v1.0.0...v2.0.0
[3.0.0]: https://github.com/optimizely/oui/compare/v2.0.0...v3.0.0
[3.1.0]: https://github.com/optimizely/oui/compare/v3.0.0...v3.1.0
[4.0.0]: https://github.com/optimizely/oui/compare/v3.1.0...v4.0.0
[4.0.1]: https://github.com/optimizely/oui/compare/v4.0.0...v4.0.1
[5.0.0]: https://github.com/optimizely/oui/compare/v4.0.1...v5.0.0
[6.0.0]: https://github.com/optimizely/oui/compare/v5.0.0...v6.0.0
[7.0.0]: https://github.com/optimizely/oui/compare/v6.0.0...v7.0.0
[7.1.0]: https://github.com/optimizely/oui/compare/v7.0.0...v7.1.0
[8.0.0]: https://github.com/optimizely/oui/compare/v7.1.0...v8.0.0
[9.0.0]: https://github.com/optimizely/oui/compare/v8.0.0...v9.0.0
[9.0.1]: https://github.com/optimizely/oui/compare/v9.0.0...v9.0.1
[9.0.2]: https://github.com/optimizely/oui/compare/v9.0.1...v9.0.2
[9.0.3]: https://github.com/optimizely/oui/compare/v9.0.2...v9.0.3
[9.0.4]: https://github.com/optimizely/oui/compare/v9.0.3...v9.0.4
[9.0.5]: https://github.com/optimizely/oui/compare/v9.0.4...v9.0.5
[9.0.6]: https://github.com/optimizely/oui/compare/v9.0.5...v9.0.6
[9.0.7]: https://github.com/optimizely/oui/compare/v9.0.6...v9.0.7
[9.0.8]: https://github.com/optimizely/oui/compare/v9.0.7...v9.0.8
[10.0.0]: https://github.com/optimizely/oui/compare/v9.0.8...v10.0.0
[11.0.0]: https://github.com/optimizely/oui/compare/v10.0.0...v11.0.0
[11.1.0]: https://github.com/optimizely/oui/compare/v11.0.0...v11.1.0
[11.2.0]: https://github.com/optimizely/oui/compare/v11.1.0...v11.2.0
[11.3.0]: https://github.com/optimizely/oui/compare/v11.2.0...v11.3.0
[11.3.1]: https://github.com/optimizely/oui/compare/v11.3.0...v11.3.1
[11.4.0]: https://github.com/optimizely/oui/compare/v11.3.1...v11.4.0
[11.5.0]: https://github.com/optimizely/oui/compare/v11.4.0...v11.5.0
[12.0.0]: https://github.com/optimizely/oui/compare/v11.5.0...v12.0.0
[12.1.0]: https://github.com/optimizely/oui/compare/v12.0.0...v12.1.0
[12.2.0]: https://github.com/optimizely/oui/compare/v12.1.0...v12.2.0
[13.0.0-rc.1]: https://github.com/optimizely/oui/compare/v12.2.0...v13.0.0-rc.1
[13.0.0-rc.2]: https://github.com/optimizely/oui/compare/v13.0.0-rc.1...v13.0.0-rc.2
[13.0.0-rc.3]: https://github.com/optimizely/oui/compare/v13.0.0-rc.2...v13.0.0-rc.3
[13.0.0]: https://github.com/optimizely/oui/compare/v13.0.0-rc.3...v13.0.0
[13.0.1]: https://github.com/optimizely/oui/compare/v13.0.0...v13.0.1
[13.1.0]: https://github.com/optimizely/oui/compare/v13.0.1...v13.1.0
[13.1.1]: https://github.com/optimizely/oui/compare/v13.1.0...v13.1.1
