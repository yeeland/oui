Lego
====

Refactored, component-based Sass/HTML and vue.js.

Currently this repo contains the modular Sass library that will serve as the foundation for building out objects on optimizely.com.

## Requirements

- Sass 3.3.8
    - `gem install sass` will update existing Sass install
- Compass 1.0.0.alpha.19
    - `gem install compass --pre`

## Using Sourcemaps

If you want to use sourcemaps with Chrome follow [the instructions](https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0). Once you have it all set up run:

    sass --compass --sourcemap --watch path/to/this/repo:path/to/destination/css



