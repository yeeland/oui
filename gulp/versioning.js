var gulp        = require('gulp'),
    paths       = require('../config').paths,
    bump        = require('gulp-bump'),
    git         = require('gulp-git'),
    filter      = require('gulp-filter'),
    tagVersion  = require('gulp-tag-version');

// Bumping version number and tagging the repository with it.
// Please read http://semver.org/
//
// https://www.npmjs.com/package/gulp-tag-version
//
// You can use the commands
//
//     gulp patch     # makes v0.1.0 → v0.1.1
//     gulp feature   # makes v0.1.1 → v0.2.0
//     gulp release   # makes v0.2.1 → v1.0.0
//
// To bump the version numbers accordingly after you did a patch,
// introduced a feature or made a backwards-incompatible release.
var increaseVersion = function(importance) {
  // Get all the files to bump version in
  return gulp.src(['./package.json'])
    // Bump the version number in those files
    .pipe(bump({type: importance}))
    // Save it back to filesystem
    .pipe(gulp.dest('./'))
    // Commit the changed version number
    .pipe(git.commit('New OUI ' + importance + '.'))
    // Read only one file to get the version number
    .pipe(filter('package.json'))
    // Tag it in the repository
    .pipe(tagVersion());
}

// Release OUI patch
// Bumps version from v0.1.0 to v0.1.1
gulp.task('patch', function() {
  return increaseVersion('patch');
});

// Release OUI feature
// Bumps version from v0.1.1 to v0.2.0
gulp.task('feature', function() {
  return increaseVersion('minor');
});

// Release breaking OUI change
// Bumps version from v0.2.1 to v1.0.0
gulp.task('release', function() {
  return increaseVersion('major');
});

