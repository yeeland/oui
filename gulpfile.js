var gulp = require('gulp');
var gutil = require('gulp-util');
var svgSymbols = require('gulp-svg-symbols');
var scsslint = require('gulp-scss-lint');

var paths = {
  'styles' : 'src/scss/**/*.scss',
  'stylesIgnore' : '!src/scss/library/**/*.scss',
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
  gulp.src([paths.styles, paths.stylesIgnore])
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }));
});

gulp.task('default', ['lint']);
