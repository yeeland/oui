/**
 * Directive for simple disclosures
 *
 * @author Tom Genoni
 */
define(function() {
  var discloseService = require('app/services/disclose');

  return {
    __activate: function(event) {
      event.preventDefault();
      discloseService.activate(this.el, event.target);
    },
    bind: function() {
      var $el = $(this.el);
      $el.find('> li > a').on('click', this.__activate.bind(this));
    },
    unbind: function() {
      var $el = $(this.el);
      $el.find('> li > a').off('click', this.__activate);
    }
  };
});
