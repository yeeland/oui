define(function() {

  var Vue = require('vue');

  var MyComponent = Vue.extend({
    template: 'A custom component'
  });

  return Vue.component('test', MyComponent);
});
