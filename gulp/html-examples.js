// HTML Examples
// Loads HTML examples for testing of new OUI Sass and JS.

var gulp        = require('gulp'),
    paths       = require('../config').paths,
    browserSync = require('browser-sync');

gulp.task('html-examples', ['js', 'sass', 'watch:sass', 'watch:js'], function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    online: true,
    port: 3019,
    startPath: "/examples/",
    files: [
      "tests/**/*.html",
      paths.cssDest + "oui.css"
    ]
  });
});
