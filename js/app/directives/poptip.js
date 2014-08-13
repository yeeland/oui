/**
 * Vue directive for creating a pop-tip
 *
 * @author Cheston Lee
 */
define(function(require, exports, module) {
  var $ = require('jquery');
  var Vue = require('vue');

  var $poptip = $('<div class="lego-pop-tip"></div>');
  var arrowClassTmpl = 'lego-pop-tip--arrow-';

  return Vue.directive('poptip',{
    bind: function() {
      // var $el = $(this.el);
      var $body = $('body');
      $poptip.addClass(arrowClassTmpl + this.expression);
      $body.append($poptip);
    },
    unbind: function() {
      $poptip.remove();
    }
  });
});
