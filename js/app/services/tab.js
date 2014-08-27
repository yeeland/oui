/**
 * Abstract controller for the event flow managing which tab is showing in a tab panel
 *
 * @author Cheston Lee
 */

define(function() {
  var ACTIVE_NAV_CLASS = 'lego-tabs-nav__item--active';
  var ACTIVE_TAB_CLASS = 'lego-tabs-pane__item--active';

  var service = {};
  //Expose the tab relation class for the directive/tab
  service.TAB_RELATION = 'data-tab-related';

  service.show = function(el) {
    var $el = $(el);
    var contentIdent = $el.attr(this.TAB_RELATION);

    var currentActive = document.getElementsByClassName(ACTIVE_NAV_CLASS)[0];

    if (typeof currentActive !== 'undefined') {
      this.hide(currentActive);
    }

    $el.addClass(ACTIVE_NAV_CLASS);
    $('[' + this.TAB_RELATION + '="' + contentIdent + '"]').addClass(ACTIVE_TAB_CLASS);

  };

  service.hide = function(el) {
    var $el = $(el);
    var contentIdent = $el.attr(this.TAB_RELATION);

    $el.removeClass(ACTIVE_NAV_CLASS);
    $('[' + this.TAB_RELATION + '="' + contentIdent + '"]').removeClass(ACTIVE_TAB_CLASS);
  };

  return service;
});
