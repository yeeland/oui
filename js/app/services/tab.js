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
   * @param nav {HTMLElement} The <li> element representing the newly active tab
   * @param tab {HTMLElement} The <div> element representing the newly active tab content
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
      currActiveNav.removeClass(this.ACTIVE_CLASS);
      currActiveTab.removeClass(this.ACTIVE_CLASS);
    }

    $nav.addClass(this.ACTIVE_CLASS);
    $tab.addClass(this.ACTIVE_CLASS);
  };

  return service;
});
