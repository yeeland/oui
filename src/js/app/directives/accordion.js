define(function() {
  var accordionService = require('app/services/accordion');

  return {
    data: {
      show: true
    },
    bind: function() {
      console.log(accordionService);
      var $el = $(this.el);

      $el.find('> li > a').on('click', function(e) {
        e.preventDefault();
        accordionService.activate(this.el, e.target);
      }.bind(this));
    }
  };
});
