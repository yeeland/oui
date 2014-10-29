/**
 * Service for simple disclosure
 *
 * @author Tom Genoni
 */

define(function() {

  var ACTIVE_DISCLOSE_CLASS = 'lego-disclose__item--active';

  function activate(el, target) {
    var $target = $(target);

    var contentPane = $target.parent('.lego-disclose__item');

    if ( contentPane.hasClass(ACTIVE_DISCLOSE_CLASS) ) {
      contentPane.removeClass(ACTIVE_DISCLOSE_CLASS);
    } else {
      contentPane.addClass(ACTIVE_DISCLOSE_CLASS);
    }
  }

  return {
    activate: activate
  };
});
