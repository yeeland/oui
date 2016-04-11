// Watch
// Watch tasks.

var gulp = require('gulp');

gulp.task('watch:sass', function() {
  gulp.watch('src/oui/**/*.scss', ['sass']);
});

gulp.task('watch:js', function() {
  gulp.watch('src/js/**/*.js', ['js']);
});
