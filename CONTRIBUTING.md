# Contributing to OUI

## Running OUI locally

It's easy! Clone this repository and run `npm install`. This will install of the needed dependencies.

Here are a few commonly used commands:

* `npm start` - compiles Sass, transpiles JavaScript, and builds the documentation
* `npm test` - lints and tests the codebase
* `npm run docs:watch` - runs the documentation environment locally
* `npm run docs:build:json` - rebuilds the JSON that powers the documentation. This command is helpful in conjunction with `npm run docs:watch` when updating Sass or React examples.

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


## Releasing a new version of OUI

1. Run `git checkout devel && git pull && git checkout master && git pull` to get the latest version of each branch.
2. Use `git merge devel` to merge `devel` into `master`.
3. Open `CHANGELOG.md` and determine the new version number. Version numbers follow the format `x.y.z` where each letter corresponds to: `Release.Feature.Patch`. You should increase the number of the highest severity change in the version. If there is a `Release` change, `23.1.9` would become `24.0.0`. But if there are only `Patch` changes, then `23.1.9` becomes `23.1.10`.
4. Add a section heading above the “Unreleased” contributions that includes the version number.
5. Commit the change on `master`: `git add . && git commit -a -m 'Prep for new release version x.y.z'`
6. Run one of these depending on the highest importance issue this release:
  * `[Patch]` changes: `npm version patch`
  * `[Feature]` changes: `npm version minor`
  * `[Release]` changes: `npm version major`
7. [Create a new release on GitHub](https://github.com/optimizely/oui/releases/new). It should [look like this](https://www.dropbox.com/s/1nln5ttbxfbacuv/Screenshot%202015-09-02%2011.31.21.png). Tips:
  1. Select the new tag version
  2. Leave the “Release title” blank
  3. Paste the “Unreleased” contributions from the `CHANGELOG.md` in the release notes.

**Note for Optimizely developers:** The Optimizely frontend only reinstalls packages when its `package.json` changes. You'll have to update the version number for backward compatible changes if you want to ensure that it gets deployed quickly.
