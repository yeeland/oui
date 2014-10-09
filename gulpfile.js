var gulp = require('gulp');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var rjs = require('gulp-requirejs');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var svgSymbols = require('gulp-svg-symbols');

// SVG Generator
var svgSource = 'src/img/svg-icons/*.svg';
var svgDestination = 'dist/img/'

var paths = {
  'scripts' : ['src/js/**/*.js', '!dist/js/lego.min.js'],
  'styles' : ['src/scss/**/*.scss']
  // 'styles' : ['scss/core/partials/objects/**/*.scss', 'scss/core/partials/**/*.scss', 'scss/core/*.scss', 'scss/*.scss', 'scss/desktop/*.scss', 'scss/**/*.scss']
};

gulp.task('svg', function () {
  return gulp.src(svgSource)
    .pipe(svgSymbols({
      title:      false,
      templates: ['default-svg', 'default-demo']
    }))
    .pipe(gulp.dest(svgDestination));
});

gulp.task('test:js', function() {
  gulp.src('src/js/test/index.html')
  .pipe(mochaPhantomJS())
  .on('error', gutil.beep);
});

gulp.task('lint:js', function() {
  gulp.src(['src/js/**/*.js', 'src/js/*.js', '!src/js/lib/*.js'])
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
  gulp.src('src/scss/lego-desktop.scss')
    .pipe(shell(['sass --compass --sourcemap src/scss/lego-desktop.scss:dist/css/lego-desktop.css']))
    .on('error', gutil.log)
    .on('error', gutil.beep);
});

gulp.task('build:js', function() {
  rjs({
    baseUrl: 'src/js',
    mainConfigFile: 'src/js/common.js',
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
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build:js'])
  .on('error', gutil.log)
  .on('error', gutil.beep);

  gulp.watch(paths.styles, ['build:styles'])
  .on('error', gutil.log)
  .on('error', gutil.beep);
});

gulp.task('lint', ['lint:styles', 'lint:js']);
gulp.task('test', ['test:js']);
gulp.task('build', ['build:styles', 'build:js']);

gulp.task('default', ['lint', 'build:styles', 'build:js']);
