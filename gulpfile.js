var gulp = require('gulp');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var rjs = require('gulp-requirejs');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

var paths = {
  'scripts' : ['js/**/*.js', '!out/lego.min.js'],
  'styles' : ['scss/**/*.scss']
  // 'styles' : ['scss/core/partials/objects/**/*.scss', 'scss/core/partials/**/*.scss', 'scss/core/*.scss', 'scss/*.scss', 'scss/desktop/*.scss', 'scss/**/*.scss']
};

gulp.task('test:js', function() {
  gulp.src('js/test/index.html')
  .pipe(mochaPhantomJS())
  .on('error', gutil.beep);
});

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
  gulp.src('scss/lego-desktop.scss')
    .pipe(shell(['sass --compass --sourcemap scss/lego-desktop.scss:css/lego-desktop.css']))
    .on('error', gutil.log)
    .on('error', gutil.beep);
});

gulp.task('build:js', function() {
  rjs({
    baseUrl: 'js',
    mainConfigFile: 'js/common.js',
    findNestedDependencies: true,

    out: 'lego.min.js',
    optimize: 'none',

    include: ['main.js'],
    insertRequire: ['main.js'],
    name: 'lib/almond',
    wrap: true
  })
  .on('error', gutil.log)
  .on('error', gutil.beep)
  // .pipe(uglify({
  //   compress: {
  //     drop_debugger: true,
  //     drop_console : true
  //   }
  // }))
  .pipe(gulp.dest('./out/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build:js']);
  gulp.watch(paths.styles, ['build:styles']);
});

gulp.task('lint', ['lint:styles', 'lint:js']);
gulp.task('test', ['test:js']);
gulp.task('build', ['build:styles', 'build:js']);

gulp.task('default', ['lint', 'build:styles', 'build:js']);
