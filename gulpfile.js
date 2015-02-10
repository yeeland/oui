var gulp = require('gulp');
var gutil = require('gulp-util');
var svgSymbols = require('gulp-svg-symbols');
var scsslint = require('gulp-scss-lint');
var symlink = require('gulp-symlink');

var paths = {
  'styles' : [
    'src/scss/**/*.scss',
    '!src/scss/library/**/*.scss',
    '!src/scss/desktop/partials/legacy_overrides/**/*.scss'
  ],
  'svgSource' : 'src/img/svg-icons/*.svg',
  'svgDest' : 'dist/img/'
};

// Creates SVG sprite and demo page.
// gulp svg
gulp.task('svg', function () {
  return gulp.src(paths.svgSource)
    .pipe(svgSymbols({
      title:      false,
      templates: ['default-svg', 'default-demo']
    }))
    .pipe(gulp.dest(paths.svgDest));
});

// Runs SCSS linter.
// gulp link
gulp.task('lint', function() {
  gulp.src(paths.styles)
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }));
});

// Moves thei
gulp.task('hook', function () {
  return gulp.src('.pre-commit')
  .pipe(symlink('.git/hooks/pre-commit')) // Write to the destination folder
});

gulp.task('default');
