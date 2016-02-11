// Autoprefixer

var gulp         = require('gulp')
    paths        = require('../config').paths,
    autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefix', function () {
  return gulp.src(paths.cssDestName)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.cssDest));
});

