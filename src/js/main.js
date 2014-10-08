define(function(require) {
  var $ = require('jquery');
  $(document).ready(function() {
    var app = require('app');
    var appConfig = require('app_config');
    app.run(appConfig);
  });
});
