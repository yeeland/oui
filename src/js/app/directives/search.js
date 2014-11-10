/**
 * Directive for clearing search inputs with close button.
 *
 * @author Tom Genoni
 */
define(function() {
  var discloseService = require('app/services/search');

  return {
    data: {
      show: true
    },
    bind: function() {
      var $el = $(this.el);

      $el.find('input').on('keyup', function(e) {
        searchService.activate(this.el, e.target);
      }.bind(this));


    }
  };
});
