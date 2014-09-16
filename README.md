Lego
====

Refactored, component-based Sass/HTML and vue.js.

Currently this repo contains the modular Sass library that will serve as the foundation for building out objects on optimizely.com and other projects.

## Requirements

- Bundler: Run `bundle install` to satisfy the ruby deps
  - [SASS](http://sass-lang.com/)
  - [Compass](http://compass-style.org/)
  - [SCSS-Lint](https://github.com/causes/scss-lint)

- NPM: Run  `npm install` to satisfy the node deps
  - [Gulp](http://gulpjs.com/)

## Build

- `gulp build` Will build all JS & CSS
- `gulp build:styles` Will build all CSS from SCSS
- `gulp build:js` Will build all JS
- `gulp watch` Will watch all JS & Styles and rebuild
- `gulp test` Will run the JS Unit tests using PhantomJS

## Using Sourcemaps

If you want to use sourcemaps with Chrome follow [the instructions](https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0). Once you have it all set up run:

    sass --compass --sourcemap --watch path/to/this/repo:path/to/destination/css

