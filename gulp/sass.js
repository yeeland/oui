// Sass
// Compiles OUI to a CSS file.

var gulp         = require('gulp')
    paths        = require('../config').paths,
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src(paths.oui)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.stream());
});
