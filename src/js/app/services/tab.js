/**
 * Abstract controller for the event flow managing which tab is showing in a tab panel
 *
 * @author Cheston Lee
 */

const ACTIVE_CLASS = 'tab-active';
const TAB_RELATION_ATTR = 'oui-tab-related';

export default class Tab {
  constructor() {}

  /**
   * Take in a navigation element & tab content element
   * and make them active while disabling the previous active tab
   *
   * @param nav {HTMLElement} The <li> element representing the newly active tab
   * @param tab {HTMLElement} The <div> element representing the newly active tab content
   */
  static activate(nav, tab) {
    let $nav = $(nav);
    let $tab = $(tab);

    if ($nav.hasClass(ACTIVE_CLASS)) {
      return;
    }

    let currActiveNav = $nav.siblings('.' + ACTIVE_CLASS);
    let currActiveTab = $tab.siblings('.' + ACTIVE_CLASS);

    if (currActiveNav.length === 1 && currActiveTab.length === 1) {
      currActiveNav.removeClass(ACTIVE_CLASS);
      currActiveTab.removeClass(ACTIVE_CLASS);
    }

    $nav.addClass(ACTIVE_CLASS);
    $tab.addClass(ACTIVE_CLASS)
  }
}
