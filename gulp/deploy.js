var gulp        = require('gulp'),
    paths       = require('../config').paths,
    rename      = require('gulp-rename'),
    s3          = require('gulp-s3'),
    shell       = require('gulp-shell');

// Deploy compiled file to S3 and push to GitHub.
gulp.task('deploy', ['sass', 'extras:build'], function() {
  if (!process.env.AWS_KEY || !process.env.AWS_SECRET) {
    throw "You must have `AWS_KEY` and `AWS_SECRET` environment variables. Contact daniel@optimizely.com for help."
  }

  gulp.src(paths.cssDest + '*.css')
    .pipe(rename(function(path) {
      path.dirname = pkg.version + '/';
    }))
    .pipe(s3({
      'key': process.env.AWS_KEY,
      'secret': process.env.AWS_SECRET,
      'bucket': 'optimizely-oui',
      'region': 'us-west-2'
    }))
    .pipe(shell([
      'git push',
      'git push origin v' + pkg.version,
      'npm publish ./'
    ]));
});
