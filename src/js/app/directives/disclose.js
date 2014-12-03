/**
 * Directive for simple disclosures
 *
 * @author Tom Genoni
 */
define(function() {
  var discloseService = require('app/services/disclose');

  return {
    data: {
      show: true
    },
    bind: function() {
      var $el = $(this.el);

      $el.find('> a').on('click', function(e) {
        e.preventDefault();
        discloseService.activate(this.el, e.target);
      }.bind(this));
    }
  };
});
