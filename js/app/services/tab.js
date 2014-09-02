/**
 * Abstract controller for the event flow managing which tab is showing in a tab panel
 *
 * @author Cheston Lee
 */

define(function() {

  var service = {};

  service.ACTIVE_CLASS = 'tab-active';
  service.TAB_RELATION = 'data-tab-related';

  service.show = function(nav, tab) {
    var $nav = $(nav);
    var $tab = $(tab);

    if ($nav.hasClass(this.ACTIVE_CLASS)) {
      return;
    }

    var currActiveNav = $nav.siblings('.' + this.ACTIVE_CLASS);
    var currActiveTab = $tab.siblings('.' + this.ACTIVE_CLASS);

    if (currActiveNav && currActiveTab) {
      this._hide(currActiveNav, currActiveTab);
    }

    $nav.addClass(this.ACTIVE_CLASS);
    $tab.addClass(this.ACTIVE_CLASS);

    return nav;
  };

  service._hide = function(nav, tab) {

    $(nav).removeClass(this.ACTIVE_CLASS);
    $(tab).removeClass(this.ACTIVE_CLASS);

    return nav;
  };

  return service;
});
