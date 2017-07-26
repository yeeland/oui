[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![codecov](https://codecov.io/gh/optimizely/oui/branch/devel/graph/badge.svg)](https://codecov.io/gh/optimizely/oui)
[![Gitter](https://badges.gitter.im/optimizely/oui.svg)](https://gitter.im/optimizely/oui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Live Documentation](https://img.shields.io/badge/documentation-live-blue.svg)](http://design.optimizely.com/docs/oui/)

# OUI Component Library

![Louis](https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif)

Meet Louis, the official mascot of OUI.


## Introduction

This document contains four parts:

1. [Documentation](#documentation)
2. [Including OUI in your project](#including-oui-in-your-project)
3. [Contributing to OUI](#contributing-to-oui)

***

## Documentation

[http://design.optimizely.com/docs/oui/](http://design.optimizely.com/docs/oui/)

This “living” style guide is built in React and is automatically updated with each new OUI release.

***

## Including OUI in your project

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

// ## Overrides (helper/utility classes)
// Overrides use `!important` classes for overrides and should always be loaded last.
@import '../node_modules/optimizely-oui/src/overrides/admin';
@import '../node_modules/optimizely-oui/src/overrides/background';
@import '../node_modules/optimizely-oui/src/overrides/borders';
@import '../node_modules/optimizely-oui/src/overrides/layout';
@import '../node_modules/optimizely-oui/src/overrides/margin';
@import '../node_modules/optimizely-oui/src/overrides/padding';
@import '../node_modules/optimizely-oui/src/overrides/type';
@import '../node_modules/optimizely-oui/src/overrides/sizing';
```

#### Using OUI React components

OUI comes with React components that can be used instead of copying and pasting HTML from the documentation. You can view these components locally by running `npm run docs:watch` after cloning the repository and installing dependencies with `npm install`.

These components can be used in a React codebase by requiring OUI:

```js
import Button from 'optimizely-oui';
```

[We provide React documentation](http://design.optimizely.com/docs/oui/) that includes information on our component props and default values.

## React Components Dev Status:

| Component| Status| Component | Status | Component | Status |           
| ------------- |:-------------:| ------------- |:-------------:| ------------- |:-------------:| 
| Accordion     | :red_circle: | Array     | :red_circle:     | ArrowInline | :heavy_check_mark:    |     
| Attention | :heavy_check_mark:    | Badge | :heavy_check_mark:    | BlockList | :heavy_check_mark:    |         
| BlockList/Category | :heavy_check_mark:    | BlockList/Item | :heavy_check_mark:    | Button | :heavy_check_mark:    |     
| ButtonRow | :heavy_check_mark:    | CheckBox | :heavy_check_mark:    | Code | :heavy_check_mark:    |     
| Dialog | :red_circle:   | Disclose | :red_circle:     | Dropdown | :red_circle:    |     
| Help | :red_circle:    | Input | :heavy_check_mark:    | InputIcon | :red_circle:   |  
| Label | :heavy_check_mark:    | Media | :red_circle:    | Nav | :red_circle:    |   
| OverlayWrapper | :heavy_check_mark:    | Pagination | :red_circle:   | Popover | :heavy_check_mark:    |   
| Poptip | :heavy_check_mark:    | ProgressBar | :red_circle:    | ProgressDots | :red_circle:     |   
| Radio | :heavy_check_mark:    | Search | :red_circle:     | Select | :red_circle:     |   
| Spinner | :red_circle:     | Stats | :red_circle:     | Steps | :red_circle:     |   
| Table | :heavy_check_mark:    | Tabel/TBody | :heavy_check_mark:    | Tabel/TD | :heavy_check_mark:    |   
| Tabel/THead | :heavy_check_mark:    | Tabel/TR | :heavy_check_mark:    | TabNav | :heavy_check_mark:    |   
| TabNav/Tab | :heavy_check_mark:    | Textarea | :heavy_check_mark:    | Token | :heavy_check_mark:    |   

| Component| Status| Component | Status | Component | Status |           
| ------------- |:-------------:| ------------- |:-------------:| ------------- |:-------------:| 
| Accordion     | :large_white_square: | Array     | :large_white_square:     | ArrowInline | :white_check_mark:    |     
| Attention | :white_check_mark:    | Badge | :white_check_mark:    | BlockList | :white_check_mark:    |         
| BlockList/Category | :white_check_mark:    | BlockList/Item | :white_check_mark:    | Button | :white_check_mark:    |     
| ButtonRow | :white_check_mark:    | CheckBox | :white_check_mark:    | Code | :white_check_mark:    |     
| Dialog | :large_white_square:   | Disclose | :large_white_square:     | Dropdown | :large_white_square:    |     
| Help | :large_white_square:    | Input | :white_check_mark:    | InputIcon | :large_white_square:   |  
| Label | :white_check_mark:    | Media | :large_white_square:    | Nav | :large_white_square:    |   
| OverlayWrapper | :white_check_mark:    | Pagination | :large_white_square:   | Popover | :white_check_mark:    |   
| Poptip | :white_check_mark:    | ProgressBar | :large_white_square:    | ProgressDots | :large_white_square:     |   
| Radio | :white_check_mark:    | Search | :large_white_square:     | Select | :large_white_square:     |   
| Spinner | :large_white_square:     | Stats | :large_white_square:     | Steps | :large_white_square:     |   
| Table | :white_check_mark:    | Tabel/TBody | :white_check_mark:    | Tabel/TD | :white_check_mark:    |   
| Tabel/THead | :white_check_mark:    | Tabel/TR | :white_check_mark:    | TabNav | :white_check_mark:    |   
| TabNav/Tab | :white_check_mark:    | Textarea | :white_check_mark:    | Token | :white_check_mark:    |   

***

## Contributing to OUI

Want to run OUI locally? Clone this repository and run `npm install`. The `npm run` command will list all the available commands.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information
