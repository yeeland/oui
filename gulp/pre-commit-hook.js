// Pre Commit Hook
// Symlinks the .pre-commit file so that certain tasks will run before a git commit.

var gulp        = require('gulp'),
    paths       = require('../config').paths,
    symlink     = require('gulp-symlink');

gulp.task('hook', function () {
  return gulp.src('.pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', {
      force: true
    }));
});
