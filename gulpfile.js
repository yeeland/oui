var gulp = require('gulp');
var shell = require('gulp-shell');
var rjs = require('gulp-requirejs');
var jshint = require('gulp-jshint');
//var scsslint = require('gulp-scss-lint');

var paths = {
  'scripts' : ['core/js/**/*.js', '!out/lego.min.js'],
  'styles' : ['core/partials/**/*.scss', 'core/partials/*.scss',
              './lego.scss', 'custom/*.scss', '!out/lego.css']
};

gulp.task('lint:js', function() {
  gulp.src(['core/js/**/*.js', 'core/js/*.js', '!core/js/lib/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint:styles', function() {
  // gulp.src(paths.styles)
  //   .pipe(scsslint({
  //     'config' : 'scss-lint.yml'
  //   }));
});

gulp.task('build:styles', function() {
  gulp.src('lego.scss')
    .pipe(shell(['sass --compass lego.scss:out/lego.css']));
});

gulp.task('build:js', function() {
  rjs({
    baseUrl: 'core/js',
    mainConfigFile: 'core/js/common.js',
    findNestedDependencies: true,

    out: 'lego.min.js',
    // optimize: 'uglify2',
    optimize: 'none',

    include: ['app/directives/poptip'],
    insertRequire: ['lib/vue.js'],
    name: 'lib/almond',
    wrap: true
  }).pipe(gulp.dest('./out/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build:js']);
  gulp.watch(paths.styles, ['build:styles']);
});

gulp.task('lint', ['lint:styles', 'lint:js']);

gulp.task('default', ['lint', 'build:styles', 'build:js']);
