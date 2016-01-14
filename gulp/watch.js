var gulp        = require('gulp'),
    paths       = require('../config').paths;

// Watch tasks
gulp.task('watch:sass', function() {
  gulp.watch('src/oui/**/*.scss', ['sass']);
});

gulp.task('watch:js', function() {
  gulp.watch('src/js/**/*.js', ['js']);
});
