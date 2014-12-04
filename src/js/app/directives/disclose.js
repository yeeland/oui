/**
 * Directive for simple disclosures
 *
 * @author Tom Genoni
 */
define(function() {

  var ACTIVE_DISCLOSE_CLASS = 'lego-disclose__item--active';

  function discloseActivate(el, target) {
    var $target = $(target);

    var contentPane = $target.parent('.lego-disclose__item');

    if ( contentPane.hasClass(ACTIVE_DISCLOSE_CLASS) ) {
      contentPane.removeClass(ACTIVE_DISCLOSE_CLASS);
    } else {
      contentPane.addClass(ACTIVE_DISCLOSE_CLASS);
    }
  }

  return {
    data: {
      show: true
    },
    bind: function() {
      var $el = $(this.el);

      $el.find('> a').on('click', function(e) {
        e.preventDefault();
        discloseActivate(this.el, e.target);
      }.bind(this));
    }
  };
});
