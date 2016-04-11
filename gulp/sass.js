// Sass
// Compiles OUI to a CSS file.

var gulp = require('gulp');
var paths = require('../config').paths;
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass:compile', function() {
  return gulp.src(paths.oui)
    .pipe(sass({
      errLogToConsole: true,
    }))
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('sass:autoprefix', ['sass:compile'], function() {
  return gulp.src(paths.cssDestName)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.stream());
});

gulp.task('sass', ['sass:compile', 'sass:autoprefix']);
