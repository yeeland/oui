var gulp        = require('gulp'),
    paths       = require('../config').paths,
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglifyjs');

// Concatenate and uglify js
gulp.task('js', ['js:dependencies'], function() {
  gulp.src('src/js/**/*.js')
    .pipe(uglify('oui.min.js').on('error', gutil.log))
    .pipe(gulp.dest('dist/js'))
});

// Concatenate and uglify js
gulp.task('js:dependencies', function() {
  gulp.src('src/js/html/*.html')
    .pipe(gulp.dest('dist/js/html'))
});
