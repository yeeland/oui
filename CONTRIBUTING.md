# Contributing to LEGO

1. Branch off of master: `git checkout -b username/branch-name`.
2. Make your changes, commit your code, and open a pull request against `master`. Add at least one reviewer.
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

  * Patch
  * Feature
  * Release

  GitHub issue number is the number of the GitHub issue, if applicable, preceded
  by a `#`.

## Releasing a new version of LEGO

1. Open the `CHANGELOG.md` and look at the "Unreleased" contributions.
2. `git checkout master` and run `gulp patch`, `gulp feature`, or `gulp release` depending on the highest importance issue.
3. Update the `CHANGELOG.md` to reflect the new release.
4. Push the changes to `master` with `git push` and `git push --tags`.
5. [Create a new release on GitHub](https://github.com/optimizely/lego/releases/new) using the version number gulp generated. Paste the "Unreleased" contributions from the `CHANGELOG.md` in the release notes.
6. Run `npm publish ./` to push the version to NPM. You must be a LEGO contributor on NPM to do this.
