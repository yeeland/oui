var gulp        = require('gulp'),
    paths       = require('../config').paths,
    scsslint    = require('gulp-scss-lint');

// Runs SCSS linter.
// gulp link
gulp.task('lint', function() {
  gulp.src(paths.styles)
    .pipe(scsslint({
      'bundleExec': true,
      'config': paths.scssLint
    }))
    .pipe(scsslint.failReporter());
});
