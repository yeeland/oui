/**
 * Main app entry-point
 */
define(function(require) {
  var Vue = require('vue');
  var appFactory = require('app_factory');

  Vue.config({
    // use `[[ prop ]]` style delimiters since django uses {{
    delimiters: ['[', ']']
  });

  return appFactory.create();
});
