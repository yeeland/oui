var gulp = require('gulp');
var shell = require('gulp-shell');
var rjs = require('gulp-requirejs');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');

var paths = {
  'scripts' : ['js/**/*.js', '!out/lego.min.js'],
  'styles' : ['core/partials/**/*.scss', 'core/*.scss']
};

gulp.task('lint:js', function() {
  gulp.src(['js/**/*.js', 'js/*.js', '!js/lib/*.js'])
    .pipe(jshint())
    .on('error', gutil.log)
    .on('error', gutil.beep)
    .pipe(jshint.reporter('default'));
});

gulp.task('lint:styles', function() {
  gulp.src(paths.styles)
  //We use shell here because the scss-lint plugin cannot handle scss-lint errors and explodes
  .pipe(shell(['scss-lint -c .scss-lint.yml ' + paths.styles.join(' ')]))
  .on('error', function() {
    gutil.log('======        SCSS-LINT COMPLETE          =======', gutil.colors.cyan('123'));
    gutil.beep();
    process.exit();
  });
});

gulp.task('build:styles', function() {
  gulp.src('scss/lego.scss')
    .pipe(shell(['sass --compass scss/lego.scss:out/lego.css']))
    .on('error', gutil.log)
    .on('error', gutil.beep);
});

gulp.task('build:js', function() {
  rjs({
    baseUrl: 'js',
    mainConfigFile: 'js/common.js',
    findNestedDependencies: true,

    out: 'lego.min.js',
    // optimize: 'uglify2',
    optimize: 'none',

    include: ['main.js'],
    insertRequire: ['main.js'],
    name: 'lib/almond',
    wrap: true
  })
  .on('error', gutil.log)
  .on('error', gutil.beep)
  .pipe(gulp.dest('./out/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build:js']);
  gulp.watch(paths.styles, ['build:styles']);
});

gulp.task('lint', ['lint:styles', 'lint:js']);
gulp.task('build', ['build:styles', 'build:js']);

gulp.task('default', ['lint', 'build:styles', 'build:js']);
