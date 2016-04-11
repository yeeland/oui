// SCSS Linter
// Runs the SCSS linter on the OUI code.

var gulp = require('gulp');
var paths = require('../config').paths;
var scsslint = require('gulp-scss-lint');

gulp.task('lint', function() {
  gulp.src(paths.styles)
    .pipe(scsslint({
      'bundleExec': true,
      'config': paths.scssLint,
    }));
});
