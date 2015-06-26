# LEGO Component Library

This document contains two sets of instructions:

1. Including LEGO in your project
2. Contributing new CSS to LEGO

## Including LEGO in your project

LEGO is published as an npm module called `optimizely-lego`. To install:

```
npm install optimizely-lego --save-dev
```

which should add the dependency to your `package.json` file.

If using Gulp for your project:

```javascript
gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths : [
        require('optimizely-lego').includePath
      ]
    }))
    .pipe(gulp.dest('path/to/css'));
});
```

### Example Starter Code

Download [LEGO starter code](assets/lego-starter-code.zip) that includes the required file structure for new projects. Note that the paths to `core/...` will only work if the above gulp task is in place.

### Structure of LEGO

LEGO consists of two parts:

1. **Core**
    - Base styles used as the foundation for any site.
    - This code lives in this LEGO repository and is a dependency for platform code.
2. **Platform (.e.g, `mobile`)**
    - Platform or device specific built on top of Core.
    - This code lives in the platform repo, pulling Core as a dependency.

For example, if you're building a mobile site, `mobile.scss` would contain:
```scss
// # Mobile
// Root file driving the Mobile CSS.

// Compass polyfills
@import 'core/core-polyfills';

// ## Core functions and mixins
@import 'core/partials/elements/functions';
@import 'core/partials/elements/mixins';

// ## Core and p13n variables
// Import `core` and `mobile` variables

@import 'core/core-variables';
@import 'mobile/mobile-variables';

// ## Core and mobile partials
// Import `core` and `mobile` partials

@import 'core/core-partials';
@import 'mobile/mobile-partials';

// ## Trumps
// Trumps use `!important` classes for overrides and should always be loaded last.

@import 'core/partials/trumps/background';
@import 'core/partials/trumps/layout';
@import 'core/partials/trumps/margin';
@import 'core/partials/trumps/padding';
@import 'core/partials/trumps/type';
@import 'core/partials/trumps/sizing';
```

## Contributing to LEGO

The following is for users planning to make contributions to LEGO.

Important: see [CONTRIBUTING.md](CONTRIBUTING.md) for details on our versioning system.

After cloning the `lego` repo run:

```bash
bundle install && bundle update
npm install
gulp hook
```

### Cheat Sheet

- **`gulp`** : Runs the default compass watch process.
- **`gulp hook`** : Installs the linter pre-commit hook (please do this!).
- **`gulp lint`** : Runs the SCSS linter.
- **`gulp svg`** : Builds svg sprite and demo page into `dist`.
- **`gulp sass`** : Builds Core-only css file for testing into `dist`.
- **`gulp feature | patch | release`** : For tagging releases.

### Getting Started

#### Pre-Commit Hook &amp; Linter

As part of the installation process above you should have run `gulp hook`. This will run the task that creates a git pre-commit hook. This hook fires a SCSS linter that checks to see that any SCSS files included in the commit conform to our [standards](https://github.com/optimizely/lego/blob/master/.scss-lint.yml). These rules ensure the LEGO SCSS is consistent.

If the the linter finds issues you'll see messages in your terminal like this:

    [13:56:12] Using gulpfile /Library/WebServer/Documents/lego/gulpfile.js
    [13:56:12] Starting 'lint'...
    [13:56:12] Finished 'lint' after 4.32 ms
    [13:56:15] 1 issues found in /Library/WebServer/Documents/lego/src/scss/desktop/_desktop-partials.scss
    [13:56:15] /Library/WebServer/Documents/lego/src/scss/desktop/_desktop-partials.scss:24 [W] Files should end with a trailing newline

Here the 'lint' process ran and found 1 issue, providing the file, line number, and reason for the problem.

You can also run:

    gulp lint

at any time to check your files before you commit.

#### Run the Sass compile process

To output Core CSS file to the `dist` directory run:

    gulp sass

#### Generating the SVG Icon Sprite

When adding new icons to the library place the individual svg files into:

    src/img/svg-icons

and then run:

    gulp svg

The resulting sprite will be built to:

    dist/img/svg-symbols.svg

This is the file that is included as the first child of the body on every page of Optimizely.

## Philosophy

LEGO stands for Low-level Elements and Global Objects. It's a collection of CSS/HTML/JS elements and objects meant to be combined and extended to create larger interfaces, influenced primarily by Harry Robert's work on [inuit.css](https://github.com/csswizardry/inuit.css/) and Johnathon Snooks [SMACSS](https://smacss.com/). The goals of this library are to provide code that is...

1. **Abstracted.** Component names shouldn't be derived from the content they contain. Class names should convey structural meaning.
1. **Reusable.** Components should be generic enough to be reused throughout the site. They should make no assumptions what page/view they will be used on. Problems solved in one area should be easily applied elsewhere.
1. **Mixable.** Components should be able to join together to create larger blocks.
1. **Powered by variables.** Nearly all design elements — colors, fonts, spacings, shadows — should be defined using the pre-existing [variables](https://github.com/optimizely/lego/blob/master/core/_core-variables.scss).

By achieving these goals our code becomes...

1. **Scalable.** Reusing patterns means new elements can be created faster and with minimal additional CSS.
1. **Consistent.** Not only will developers be able to read each other's code more easily we'll have a better end-user experience across the product.
1. **Smaller and [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself)er.** Since we're constantly reusing low-level objects to build larger ones, often with Sass' <code>@extend</code> functionality, we cut down on CSS bloat. Less code means fewer bugs.


#### Writing Good Classes

In order to write HTML and CSS classes that provide meaning for developers we're using the BEM syntax. BEM stands for Block, Element, Modifier and is becoming a popular approach to building CSS and HTML that describes an object's internal relationships.

```html
<div class="lego-grid lego-grid--gutter">
    <div class="lego-grid__cell">
        <div class="docs-dummy-content">grid cell</div>
    </div>
    <div class="lego-grid__cell">
        <div class="docs-dummy-content">grid cell</div>
    </div>
    <div class="lego-grid__cell">
        <div class="docs-dummy-content">grid cell</div>
    </div>
</div>
```

In the example above...

- **Block** is represented by <code>lego-grid</code> and is the parent class of the object.
- **Elements** are children of the object. They are named by joining the parent class name and a child class with a double underscore. In this case <code>lego-grid__cell</code>.
- **Modifiers** are variations on the default. In this case we have a <code>lego-grid--gutter</code>. This provides spacing between the cells.

Though somewhat verbose, this syntax makes it easy to determine the child/parent relationships between bits of code, especially when different objects are mixed together. It can be tricky naming elements so some judgment is required. This becomes easier over time.

For a longer discussion Harry Roberts provides a <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">good introduction</a> to the syntax.


#### Futher Reading

- [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). Introduction to BEM.
- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/). What is a meaningful class name?
- [OOCSS + Sass = The best way to CSS](http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/). Some examples of bulding on existing objects using `@extend` in Sass.
- [Hacks for dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/). Some more technical details around specificity.
- [Normalising designs for better quality CSS (Video)](https://www.youtube.com/watch?v=ldx4ZFxMEeo). A conference presentation about normalizing designs and the process from design to HTML.




