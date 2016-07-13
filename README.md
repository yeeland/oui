[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![Coverage Status](https://coveralls.io/repos/github/optimizely/oui/badge.svg?branch=devel)](https://coveralls.io/github/optimizely/oui?branch=devel)
[![Gitter](https://badges.gitter.im/optimizely/oui.svg)](https://gitter.im/optimizely/oui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Live Documentation](https://img.shields.io/badge/documentation-live-blue.svg)](http://design.optimizely.com/docs/oui/)

# OUI Component Library

![Louis](https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif)

Meet Louis, the official mascot of OUI.


## Introduction

This document contains three parts:

1. [Documentation](#documentation)
2. [Including OUI in your project](#including-oui-in-your-project)
3. [Contributing to OUI](#contributing-to-oui)
4. [Philosophy](#philosophy)

***

## Documentation

[http://design.optimizely.com/docs/oui/](http://design.optimizely.com/docs/oui/)

This "living" style guide uses [ScribeSass](https://github.com/optimizely/scribesass) (currently internal to Optimizely) to construct single-page documentation from comments within each Sass file.

***

## Including OUI in your project

There are two ways to include OUI in your project.

### Pre-compiled CSS file

This is a quick and easy way to add OUI to a project. It is the least flexible option but works well for small projects and and prototypes.

You can include this pre-compiled version of OUI in your application:

```html
<link rel="stylesheet" href="https://oui.cdn.optimizely.com/13.0.0/oui.css">
<link rel="stylesheet" href="https://oui.cdn.optimizely.com/13.0.0/oui-extras.css">
```

Replace `13.0.1` with the [latest release](https://github.com/optimizely/oui/releases) if needed.

`oui.css` contains the core CSS and `oui-extras.css` currently contains only classes to render OUI icons. If you plan to use [OUI icons](https://github.com/optimizely/oui-icons) you'll need to include both `oui.css` and `oui-extras.css` in your project.

The icons can be used like this:

```html
<div class="icon icon--add-16"></div>
```

This quick and easy implementation does not let you change the color of the icons. Look at the [OUI icons](https://github.com/optimizely/oui-icons) repository for a more advanced and flexible implementation.

### Grab OUI Sass and React components from npm

This option is great for developers that want to tightly integrate OUI into their existing Sass or use our React components.

OUI is published as an npm module called `optimizely-oui` that contains Sass files and React components.

To install:

```bash
npm install optimizely-oui --save
```

This will save it within your project's `node_modules/` folder.

#### Using OUI Sass files

OUI consists of two parts:

1. **Core OUI Sass**
    - Base styles used as the foundation for any site.
    - This code lives in this OUI repository and is loaded before application specific Sass.
2. **Project specific Sass (mobile website, developer site, etc…)**
    - Project specific Sass built with OUI code such as variables or mixins.
    - This code lives in the project repo, pulling OUI as a dependency.

For example, if you're building a mobile site, your main SCSS file `mobile.scss` would contain:

```scss
// # Mobile Website
// Root file driving the Mobile Website CSS.

// ## OUI and custom functions
@import '../node_modules/optimizely-oui/src/oui/partials/sass/functions';
@import 'mobile-website/functions';

// ## OUI and custom variables
// The mobile website variables file can contain new variables or overwrite existing variables.
@import '../node_modules/optimizely-oui/src/oui/oui-variables';
@import 'mobile-website/mobile-variables';

// ## OUI and custom partials
// Partials are files that import other components
@import '../node_modules/optimizely-oui/src/oui/oui-partials';
@import 'mobile-website/mobile-partials';

// ## Trumps (helper/utility classes)
// Trumps use `!important` classes for overrides and should always be loaded last.
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/admin';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/background';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/borders';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/layout';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/margin';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/padding';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/type';
@import '../node_modules/optimizely-oui/src/oui/partials/trumps/sizing';
```

#### Using OUI React components

OUI comes with React components that can be used instead of copying and pasting HTML from the documentation. You can view these components locally by running `npm run react-docs:serve` after cloning the repository and installing dependencies with `npm install`.

These components can be used in a React codebase by requiring OUI:

```js
import Button from 'optimizely-oui';
```

[We provide React documentation](http://design.optimizely.com/docs/oui/) that includes information on our component props and default values.

***

## Contributing to OUI

Want to run OUI locally? Clone this repository and run `npm install`. The `npm run` command will list all the available commands.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

***

## Philosophy

OUI stands for Optimizely User Interface. It's a collection of CSS/HTML/JS elements and objects meant to be combined and extended to create larger interfaces, influenced primarily by Harry Robert's work on [inuit.css](https://github.com/csswizardry/inuit.css/) and Johnathon Snooks [SMACSS](https://smacss.com/). The goals of this library are to provide code that is...

1. **Abstracted.** Component names shouldn't be derived from the content they contain. Class names should convey structural meaning.
1. **Reusable.** Components should be generic enough to be reused throughout the site. They should make no assumptions what page/view they will be used on. Problems solved in one area should be easily applied elsewhere.
1. **Mixable.** Components should be able to join together to create larger blocks.
1. **Powered by variables.** Nearly all design elements — colors, fonts, spacings, shadows — should be defined using the pre-existing [variables](https://github.com/optimizely/oui/blob/master/oui/_oui-variables.scss).

By achieving these goals our code becomes...

1. **Scalable.** Reusing patterns means new elements can be created faster and with minimal additional CSS.
1. **Consistent.** Not only will developers be able to read each other's code more easily we'll have a better end-user experience across the product.
1. **Smaller and [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself)er.** Since we're constantly reusing low-level objects to build larger ones, often with Sass' <code>@extend</code> functionality, we cut down on CSS bloat. Less code means fewer bugs.

### Writing Good Classes

In order to write HTML and CSS classes that provide meaning for developers we're using the BEM syntax. BEM stands for Block, Element, Modifier and is becoming a popular approach to building CSS and HTML that describes an object's internal relationships.

```html
<div class="grid grid--gutter">
  <div class="grid__cell">
    grid cell
  </div>
  <div class="grid__cell">
    grid cell
  </div>
  </div>
  <div class="grid__cell">
    grid cell
  </div>
</div>
```

In the example above...

- **Block** is represented by <code>grid</code> and is the parent class of the object.
- **Elements** are children of the object. They are named by joining the parent class name and a child class with a double underscore. In this case <code>grid__cell</code>.
- **Modifiers** are variations on the default. In this case we have a <code>grid--gutter</code>. This provides spacing between the cells.

Though somewhat verbose, this syntax makes it easy to determine the child/parent relationships between bits of code, especially when different objects are mixed together. It can be tricky naming elements so some judgment is required. This becomes easier over time.

For a longer discussion Harry Roberts provides a <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">good introduction</a> to the syntax.

### Futher Reading

- [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). Introduction to BEM.
- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/). What is a meaningful class name?
- [OOCSS + Sass = The best way to CSS](http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/). Some examples of bulding on existing objects using `@extend` in Sass.
- [Hacks for dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/). Some more technical details around specificity.
- [Normalising designs for better quality CSS (Video)](https://www.youtube.com/watch?v=ldx4ZFxMEeo). A conference presentation about normalizing designs and the process from design to HTML.
