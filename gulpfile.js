var compass     = require('gulp-compass'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    notify      = require('gulp-notify'),
    svgSymbols  = require('gulp-svg-symbols'),
    scsslint    = require('gulp-scss-lint'),
    symlink     = require('gulp-symlink'),
    path        = require("path");

var paths = {
  // Limiting linter to first-part directories.
  'styles' : [
      'src/scss/**/*.scss',
      '!src/scss/library/**/*.scss',
      '!src/scss/desktop/partials/legacy_overrides/**/*.scss'
  ],
  svgSource : 'src/img/svg-icons/*.svg',
  svgDest : 'dist/img/',
  css: './dist/css/',
  sass: './src/scss/'
};

function swallowError(error) {
  this.emit('end');
}

function reportError(error) {
  notify.onError().apply(this, arguments);
  this.emit('end');
}

// Creates SVG sprite and demo page.
// gulp svg
gulp.task('svg', function () {
  return gulp.src(paths.svgSource)
    .pipe(svgSymbols({
      title:      false,
      templates: ['default-svg', 'default-demo']
    }))
    .pipe(gulp.dest(paths.svgDest));
});

// Runs SCSS linter.
// gulp link
gulp.task('lint', function() {
  gulp.src(paths.styles)
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }));
});

// Symlink the .pre-commit file.
gulp.task('hook', function () {
  return gulp.src('.pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', {
      force: true
    }));
});

//  compass: compile sass to css
//===========================================

gulp.task('compass', function() {
  gulp.src('./src/scss/*.scss')
    .pipe(compass({
      css: paths.css,
      sass: paths.sass
    }))
    .on('error', reportError);
});

gulp.task('watch', function() {
  // Watch task for sass
  gulp.watch(path.join(paths.sass, '**/*.scss'), ['compass']);
});

gulp.task('default',['compass','watch']);
