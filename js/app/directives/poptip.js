/**
 * Vue directive for creating a pop-tip
 *
 * @author Cheston Lee
 */
define(function(require) {
  var $ = require('jquery');

  var ARROW_CLASS_TEMPLATE = 'lego-pop-tip lego-pop-tip--arrow-';

  return {
    data: {
    },
    bind: function() {
      var $el = $(this.el);
      $el.addClass(ARROW_CLASS_TEMPLATE + this.expression);
    },
    unbind: function() {
      $(this.el).remove();
    }
  };
});
