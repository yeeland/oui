# Contributing to LEGO

1. Branch off of master: `git checkout -b username/branch-name`.
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

  * Patch - Backwards-compatible bug fixes
  * Feature - Added functionality in a backwards-compatible manner
  * Release - Breaking changes to code or large visual design modifications. Renaming a class or redesigning the button styles, for example, would be a `Release`.

  GitHub issue number is the number of the GitHub issue, if applicable, preceded by a `#`. Ideally, each contribution should have a corresponding issue that provides more context.

4. Open a pull request against `master`. Add at least one reviewer.

## Releasing a new version of LEGO

1. Run `git checkout master && git pull`.
2. Open the `CHANGELOG.md` and look at the "Unreleased" contributions. Update it to reflect the new release and commit the change on `master`.
3. Run `gulp patch`, `gulp feature`, or `gulp release` depending on the highest importance issue in the new changes.
4. Push the changes on `master` with `git push` and `git push --tags`.
5. [Create a new release on GitHub](https://github.com/optimizely/lego/releases/new). Add the tag version that gulp generated, leave the "Release title" blank, and paste the "Unreleased" contributions from the `CHANGELOG.md` in the release notes. [It should look like this](https://www.dropbox.com/s/1nln5ttbxfbacuv/Screenshot%202015-09-02%2011.31.21.png).
6. Run `npm publish ./` to push the version to NPM. You must be a LEGO contributor on NPM to do this.
