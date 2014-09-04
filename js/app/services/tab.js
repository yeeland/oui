/**
 * Abstract controller for the event flow managing which tab is showing in a tab panel
 *
 * @author Cheston Lee
 */

define(function() {

  var service = {};

  service.ACTIVE_CLASS = 'tab-active';
  service.TAB_RELATION_ATTR = 'data-tab-related';

  /**
   * Take in a navigation element & tab content element
   * and make them active while disabling the previous active tab
   *
   * @param nav HTMLElement The <li> element representing the newly active tab
   * @param tab HTMLElement The <div> element representing the newly active tab content
   */
  service.activate = function(nav, tab) {
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


  /**
   * Strip active class from matched nav & content elements
   *
   * @param nav HTMLElement The <li> element representing the no longer active tab
   * @param tab HTMLElement The <div> element representing the newly active tab content
   */
  service._hide = function(nav, tab) {

    $(nav).removeClass(this.ACTIVE_CLASS);
    $(tab).removeClass(this.ACTIVE_CLASS);

    return nav;
  };

  return service;
});
