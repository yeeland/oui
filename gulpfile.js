var bump = require('gulp-bump');
var del = require('del');
var filter = require('gulp-filter');
var git = require('gulp-git');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var svgSymbols = require('gulp-svg-symbols');
var scsslint = require('gulp-scss-lint');
var symlink = require('gulp-symlink');
var sass = require('gulp-sass');
var path = require('path');
var tagVersion = require('gulp-tag-version');

var paths = {
  // Limiting linter to first-part directories.
  'styles': [
      'src/core/**/*.scss',
      '!src/core/library/**/*.scss',
  ],
  svgSource: 'src/img/svg-icons/*.svg',
  svgDest: 'dist/img/',
  css: './dist/css/',
  core: './src/core/core.scss',
};


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
function increaseVersion(importance) {
  // Get all the files to bump version in
  return gulp.src(['./package.json'])
    // Bump the version number in those files
    .pipe(bump({type: importance}))
    // Save it back to filesystem
    .pipe(gulp.dest('./'))
    // Commit the changed version number
    .pipe(git.commit('New LEGO ' + importance + '.'))
    // Read only one file to get the version number
    .pipe(filter('package.json'))
    // Tag it in the repository
    .pipe(tagVersion());
}

// Creates SVG sprite and demo page.
// gulp svg
gulp.task('svg', function() {
  return gulp.src(paths.svgSource)
    .pipe(svgSymbols({
      title: false,
      templates: ['default-svg', 'default-demo'],
    }))
    .pipe(gulp.dest(paths.svgDest));
});

gulp.task('sass', function() {
  gulp.src(paths.core)
    .pipe(sass({
      errLogToConsole: true,
    }))
    .pipe(gulp.dest(paths.css));
});

// Runs SCSS linter.
// gulp link
gulp.task('lint', function() {
  gulp.src(paths.styles)
    .pipe(scsslint({
      'bundleExec': true,
      'config': '.scss-lint.yml',
    }))
    .pipe(scsslint.failReporter());
});

// Symlink the .pre-commit file.
gulp.task('hook', function() {
  return gulp.src('.pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', {
      force: true,
    }));
});

// Release LEGO patch
// Bumps version from v0.1.0 to v0.1.1
gulp.task('patch', function() {
  return increaseVersion('patch');
});

// Release LEGO feature
// Bumps version from v0.1.1 to v0.2.0
gulp.task('feature', function() {
  return increaseVersion('minor');
});

// Release breaking LEGO change
// Bumps version from v0.2.1 to v1.0.0
gulp.task('release', function() {
  return increaseVersion('major');
});

// Clean up built js files
gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('default');
