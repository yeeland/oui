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

var namespace = '';

if (args.namespace) {
  namespace = args.namespace;
}

gulp.task('js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(replace('#{OUI_JS_NAMESPACE}', namespace))
    .pipe(uglify(namespace + 'oui.min.js').on('error', gutil.log))
    .pipe(gulp.dest('dist/js'))
});
