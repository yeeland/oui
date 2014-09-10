/**
 * This is where all vue components/directives/filters/effects/partials get
 * registered in a map that is passed to the document level Vue ViewModel
 * in bundle/page.js
 *
 * The two main entry points are `app` and `app_config`.  `app` by itself does not
 * include any other modules besides Vue.  All dependencies should go through `app_config`
 *
 * @author Jordan Garcia (jordan@optimizely.com)
 */
define(function(require) {
  return {
     component: require('app/components'),
     directive: require('app/directives'),
     // effect: require('app/effects')
     // partial: require('app/partials'),
     // filter: require('app/filters')
  };
});
