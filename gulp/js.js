// OUI JS
// Concatenate and uglifies the JS used to power OUI objects like poptips.

var gulp        = require('gulp'),
    paths       = require('../config').paths,
    gutil       = require('gulp-util'),
    replace     = require('gulp-replace'),
    args        = require('yargs').argv,
    uglify      = require('gulp-uglifyjs');

// If we need to add a namespace to classes injected by the JS.
// gulp js --namespace=lego-

var OUI_JS_NAMESPACE = '';

if (args.namespace) {
  OUI_JS_NAMESPACE = args.namespace;
}

gulp.task('js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(replace('OUI_JS_NAMESPACE', OUI_JS_NAMESPACE))
    .pipe(uglify(OUI_JS_NAMESPACE + 'oui.min.js').on('error', gutil.log))
    .pipe(gulp.dest('dist/js'))
});
