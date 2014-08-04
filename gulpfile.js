var gulp = require('gulp');
var shell = require('gulp-shell');
var rjs = require('gulp-requirejs');
var jshint = require('gulp-jshint');

var paths = {
  'scripts' : ['core/js/**/*.js', '!out/lego.min.js'],
  'styles' : ['core/partials/**/*.scss', 'core/*.scss']
};

gulp.task('lint:js', function() {
  gulp.src(['core/js/**/*.js', 'core/js/*.js', '!core/js/lib/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint:styles', function() {
  var complete = '======        SCSS-LINT COMPLETE          =======';
  gulp.src(paths.styles)
  //We use shell here because the scss-lint plugin cannot handle scss-lint errors and explodes
  .pipe(shell(['scss-lint -c scss-lint.yml ' + paths.styles.join(' ')])).on('error', function() { console.log(complete); process.exit(); });
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

    include: ['main.js'],
    insertRequire: ['main.js'],
    name: 'lib/almond',
    wrap: true
  }).pipe(gulp.dest('./out/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build:js']);
  gulp.watch(paths.styles, ['build:styles']);
});

gulp.task('lint', ['lint:styles', 'lint:js']);
gulp.task('build', ['build:styles', 'build:js']);

gulp.task('default', ['lint', 'build:styles', 'build:js']);
