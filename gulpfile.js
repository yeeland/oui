var base64      = require('gulp-base64'),
    bump        = require('gulp-bump'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    filter      = require('gulp-filter'),
    fs          = require('fs'),
    git         = require('gulp-git'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    mkpath      = require('mkpath'),
    notify      = require('gulp-notify'),
    path        = require('path'),
    pkg         = require('./package.json'),
    rename      = require('gulp-rename'),
    s3          = require('gulp-s3'),
    shell       = require('gulp-shell'),
    svgSymbols  = require('gulp-svg-symbols'),
    scsslint    = require('gulp-scss-lint'),
    symlink     = require('gulp-symlink'),
    sass        = require('gulp-sass'),
    tagVersion  = require('gulp-tag-version'),
    tap         = require('gulp-tap'),
    uglify      = require('gulp-uglifyjs');

var paths = {
  // Limiting linter to first-part directories.
  'styles' : [
      'src/oui/**/*.scss',
      '!src/oui/library/**/*.scss',
  ],
  svgSource : 'src/img/svg-icons/*.svg',
  svgDest : 'dist/img/',
  cssDest: './dist/css/',
  oui: './src/oui/oui.scss',
  extrasDestName: 'oui-extras.css'
};

// Building flat CSS with base64 icons for use in extras apps
var extrasCSS = '';
var SVGS = 'node_modules/oui-icons/src/16/';


// Bumping version number and tagging the repository with it.
// Please read http://semver.org/
//
// https://www.npmjs.com/package/gulp-tag-version
//
// You can use the commands
//
//     gulp patch     # makes v0.1.0 → v0.1.1
//     gulp feature   # makes v0.1.1 → v0.2.0
//     gulp release   # makes v0.2.1 → v1.0.0
//
// To bump the version numbers accordingly after you did a patch,
// introduced a feature or made a backwards-incompatible release.
var increaseVersion = function(importance) {
  // Get all the files to bump version in
  return gulp.src(['./package.json'])
    // Bump the version number in those files
    .pipe(bump({type: importance}))
    // Save it back to filesystem
    .pipe(gulp.dest('./'))
    // Commit the changed version number
    .pipe(git.commit('New OUI ' + importance + '.'))
    // Read only one file to get the version number
    .pipe(filter('package.json'))
    // Tag it in the repository
    .pipe(tagVersion());
}

// Test changes with live html tests.
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

// Builds sass
gulp.task('sass', function() {
  return gulp.src(paths.oui)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.stream());
});

// Concatenate and uglify js
gulp.task('js', ['js:dependencies'], function() {
  gulp.src('src/js/**/*.js')
    .pipe(uglify('oui.min.js').on('error', gutil.log))
    .pipe(gulp.dest('dist/js'))
});

// Concatenate and uglify js
gulp.task('js:dependencies', function() {
  gulp.src('src/js/html/*.html')
    .pipe(gulp.dest('dist/js/html'))
});

// Watch tasks
gulp.task('watch:sass', function() {
  gulp.watch('src/oui/**/*.scss', ['sass']);
});

gulp.task('watch:js', function() {
  gulp.watch('src/js/**/*.js', ['js']);
});

// Runs SCSS linter.
// gulp link
gulp.task('lint', function() {
  gulp.src(paths.styles)
    .pipe(scsslint({
      'bundleExec': true,
      'config': '.scss-lint.yml'
    }))
    .pipe(scsslint.failReporter());
});

// Symlink the .pre-commit file.
gulp.task('hook', function () {
  return gulp.src('.pre-commit')
    .pipe(symlink('.git/hooks/pre-commit', {
      force: true
    }));
});

// Release OUI patch
// Bumps version from v0.1.0 to v0.1.1
gulp.task('patch', function() {
  return increaseVersion('patch');
});

// Release OUI feature
// Bumps version from v0.1.1 to v0.2.0
gulp.task('feature', function() {
  return increaseVersion('minor');
});

// Release breaking OUI change
// Bumps version from v0.2.1 to v1.0.0
gulp.task('release', function() {
  return increaseVersion('major');
});

// Deploy compiled file to S3 and push to GitHub.
gulp.task('deploy', ['sass', 'extras:build'], function() {
  if (!process.env.AWS_KEY || !process.env.AWS_SECRET) {
    throw "You must have `AWS_KEY` and `AWS_SECRET` environment variables. Contact daniel@optimizely.com for help."
  }

  gulp.src(paths.cssDest + '*.css')
    .pipe(rename(function(path) {
      path.dirname = pkg.version + '/';
    }))
    .pipe(s3({
      'key': process.env.AWS_KEY,
      'secret': process.env.AWS_SECRET,
      'bucket': 'optimizely-oui',
      'region': 'us-west-2'
    }))
    .pipe(shell([
      'git push',
      'git push origin v' + pkg.version,
      'npm publish ./',
      'git checkout devel',
      'git merge master',
      'git push',
    ]));
});

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
  return gulp.src('./' + SVGS + '*.svg')
    .pipe(tap(function(file, t) {
      var arr = (path.basename(file.path)).split(".");
      var filename = arr[0];
      var string = '.icon--' + filename + ' {\n\t background-image: url(../../' + SVGS + filename + '.svg) }\n\n';
      extrasCSS = extrasCSS + string
    }))
    .on('end', function(){
      mkpath.sync(paths.cssDest);
      fs.writeFile(paths.cssDest + paths.extrasDestName, extrasCSS);
    })
});

gulp.task('default');
