# Contributing to OUI

## Running OUI locally

It's easy! Clone this repository and run `npm install`. This will install of the needed dependencies.

Here are a few commonly used commands:

* `npm start` - compiles Sass, transpiles JavaScript, and builds our React documentation
* `npm test` - lints and tests the codebase
* `npm run html-examples` - displays HTML examples locally
* `npm run react-docs:serve` - displays the React documentation locally and watches relevant files for changes

Run `npm run` for an entire list.

## Development process

1. Branch off of `devel`: `git checkout -b username/branch-name`.
2. Make your changes, commit your code.
3. Add your change to the "Unreleased" section of the `CHANGELOG.md` under one of the following sub-sections:
  * **Added**: for new features.
  * **Changed**: for changes in existing functionality.
  * **Deprecated**: for once-stable features removed in upcoming releases.
  * **Removed**: for deprecated features removed in this release.
  * **Fixed**: for any bug fixes.
  * **Security**: to invite users to upgrade in case of vulnerabilities.

  Your message should follow the following format:

  ```
  [Importance] Message (GitHub Issue Number)
  ```

  Where `Importance` is:

  * Patch - Backward compatible bug fixes
  * Feature - Added functionality in a backward compatible manner
  * Release - Breaking changes to code or large visual design modifications. Renaming a class or redesigning the button styles, for example, would be a `Release`.

  GitHub issue number is the number of the GitHub issue, if applicable, preceded by a `#`. Ideally, each contribution should have a corresponding issue that provides more context.
4. `git push` your changes to GitHub.
5. Open a pull request comparing your feature `branch-name` against `devel`. Add at least one reviewer.

**Confused by Patch, Feature, and Release?** We've [written a blog post](https://medium.com/design-optimizely/how-to-version-your-ui-library-1c7a1b7ee23a) to explain the differences in more detail.

**Merging a breaking change?** We've [adopted a policy](https://github.com/optimizely/oui/issues/360) requiring UI Engineers merging a breaking change to immediately release a new version of OUI and update the Optimizely frontend to use the new release. This prevents us from getting in a state where backward compatible commits are blocked in the "Unreleased" queue by complicated breaking changes.

## Deprecating code

This applies any time classes are being renamed and you want old and new code to be running simultaneously, for example, changing `width-100` to `width--100`. In order to give engineers time to refactor deprecated classes, the UI Engineer introducing breaking changes should do the following:

1. Move the deprecated code into a new partial in OUI, adding `--deprecated` to its filename:

  ```
  [_filename]--deprecated.scss
  ```

  For example, if code in `_sizing.scss` contains a breaking change, OUI would contain:

  ```
  _sizing.scss
  _sizing--deprecated.scss
  ```

  Where `_sizing.scss` contains the new code and `_sizing--deprecated.scss` is deprecated code.
2. Add a line into `## [Unreleased][unreleased]` section in the `CHANGELOG.md` explaining the change. Use the `### Deprecated` heading.
3. Make the needed changes in the application HTML after the release.
4. Communicate the breaking change to ADEPT to prevent deprecated code from being introduced.
5. Create an issue on GitHub to track the deprecated code.
6. After 14 days the UI Engineer should search the codebase one last time for depreciated HTML and delete the `--depreciated.scss` partial.

## Releasing a new version of OUI

1. Run `git checkout devel && git pull && git checkout master && git pull`.
2. `git merge devel` to merge `devel` into `master` and fix potential merge conflicts.
3. Open `CHANGELOG.md` and determine your new version number `xx.x.x` based on what's being released in this version
4. Add a section heading under the "Unreleased" contributions section that includes your `xx.x.x` version number and the release date: `## [17.3.1][17.3.1] - 2016-09-19`
5. Update the version number in the unreleased link near the bottom of the file: `[Unreleased]: https://github.com/optimizely/oui/compare/v17.3.1...HEAD`
6. Add a new link for your new version at the bottom of the file: `[17.3.1]: https://github.com/optimizely/oui/compare/v17.3.0...v17.3.1`. (Duplicate the previous line, update the first number to the last version released `v17.3.0`, and the last number to this new version being released `v17.3.1`.)
7. Commit the change on `master`: `git add . && git commit -a -m 'Prep for new release version xx.x.x'`
8. (Optional) Update the URLs in `src/oui/partials/components/_icons.scss` to reflect the version of `oui-icons` that `oui` uses. Run `npm install && npm list oui-icons` to get that version number. These get embedded in the OUI documentation.
9. Run one of these depending on the highest importance issue this release:
  [Patch] changes: `npm version patch`
  [Feature] changes: `npm version minor`
  [Release] changes: `npm version major`
10. Now [create a new release on GitHub](https://github.com/optimizely/oui/releases/new). It should [look like this](https://www.dropbox.com/s/1nln5ttbxfbacuv/Screenshot%202015-09-02%2011.31.21.png). Select
 the tag version that gulp generated, leave the "Release title" blank, and paste the "Unreleased" contributions from the `CHANGELOG.md` in the release notes.
11. Switch to the ScribeSass repo and [deploy new documentation](https://github.com/optimizely/scribesass/blob/master/README.md) for our CSS documentation.

**Note for Optimizely developers:** The Optimizely frontend only reinstalls packages when its `package.json` changes. You'll have to update the version number for backward compatible changes if you want to ensure that it gets deployed quickly.

### Releasing a beta version?

Instead of merging into `master`, work on `devel` and update both the `CHANGELOG.md` and `package.json` with your version number (example: `13.0.0-beta.1`). Commit the changes on `devel` and run `git tag -a v13.0.0-beta.1 -m "13.0.0-beta.1"` replacing the version string with your version. Release it with `git push && git push --tags`.

Travis CI will publish the React documentation online and upload the compiled CSS files to OUI's CDN. It _will not_ publish beta releases to NPM automatically. That can be done with this command: `./node_modules/.bin/json -I -f package.json -e 'this.devDependencies={}' && npm publish --tag oui-react && git checkout -- package.json`. Replace `oui-react` with a tag name for your release. It can't be a valid SemVer version. That command will also temporarily remove `devDependencies` from the `package.json` before publishing to `npm install` quicker for the applications that use OUI.
