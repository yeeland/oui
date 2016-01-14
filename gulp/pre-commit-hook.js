var gulp        = require('gulp'),
    paths       = require('../config').paths,
    symlink     = require('gulp-symlink');

// Symlink the .pre-commit file.
gulp.task('hook', function () {
  return gulp.src('.pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', {
      force: true
    }));
});