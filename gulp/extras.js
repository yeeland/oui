// Extras
// This generates a compiled CSS file containing only base64 icons for use with
// projects that are including OUI via the CSS link.

var gulp        = require('gulp'),
    paths       = require('../config').paths,
    mkpath      = require('mkpath'),
    fs          = require('fs'),
    concat      = require('gulp-concat'),
    path        = require('path'),
    tap         = require('gulp-tap'),
    base64      = require('gulp-base64');

gulp.task('extras:build', ['extras:icons'], function () {
  return gulp.src(paths.cssDest + paths.extrasDestName)
    .pipe(base64({
        extensions: ['svg'],
        debug: false
    }))
    .pipe(concat(paths.cssDest + paths.extrasDestName))
    .pipe(gulp.dest('.'));
});

gulp.task('extras:icons', function () {
  return gulp.src('./' + paths.svgs + '*.svg')
    .pipe(tap(function(file, t) {
      var arr = (path.basename(file.path)).split(".");
      var filename = arr[0];
      var string = '.icon--' + filename + ' {\n\t background-image: url(../../' + paths.svgs + filename + '.svg) }\n\n';
      paths.extrasCSS = paths.extrasCSS + string
    }))
    .on('end', function(){
      mkpath.sync(paths.cssDest);
      fs.writeFile(paths.cssDest + paths.extrasDestName, paths.extrasCSS);
    })
});
