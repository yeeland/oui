/**
 * Directive for simple accordion
 *
 * @author Cheston Lee
 */
define(function() {
  var accordionService = require('app/services/accordion');

  return {
    __activate: function(event) {
      event.preventDefault();
      accordionService.activate(this.el, event.target);
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
