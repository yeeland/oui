/**
 * Tab directive to handle finding relationship between tabs & content and
 * activating nav/content elements.
 *
 * Relationships can be made via data attribute('data-tab-realted')
 * or by the order of the nav element and it's assoicated tab content block.
 *
 * Example of data attribute relationship
 *
 * <div v-tabs="tabsContainer2">
 *   <ul>
 *     <li class="tab-active" data-tab-related="two">Tab Two</li>
 *     <li data-tab-related="one">Tab One</li>
 *     <li data-tab-related="three">Tab Three</li>
 *   </ul>
 * </div>
 *
 *  <div class="lego-tab-content" id="tabsContainer2">
 *    <div class="tab-active" data-tab-related="one">One</div>
 *    <div data-tab-related="three">Three</div>
 *    <div data-tab-related="two">Two</div>
 *  </div>
 *
 * Example of order based relationship
 *
 *   <div oui-component="tab-container">
 *    <ul>
 *      <li class="tab-active">Tab One</li>
 *      <li>Tab Two</li>
 *      <li>Tab Three</li>
 *    </ul>
 *  </div>
 *
 *  <div id="tabsContainer">
 *    <div class="tab-active">One</div>
 *    <div>Two</div>
 *    <div>Three</div>
 *  </div>
 *
 * @author Cheston Lee
 */
import BaseController from './base';
import TabService from '../services/tab';

const NAME = 'tab';
const TAB_CONTAINER_ID_SELECTOR = 'oui-tab-container-id';
const TAB_CONTAINER_SELECTOR = 'oui-tab-container';
const TAB_RELATION_ATTR = 'oui-tab-related';

export default class Tab extends BaseController {
  constructor(elem) {
    super(elem);
    this.tabNav = this.$elem;
    let tabContainerID = this.tabNav.attr(TAB_CONTAINER_ID_SELECTOR);
    this.$tabContainer = $(`[${TAB_CONTAINER_SELECTOR}=${tabContainerID}]`);
  }

  bind() {
    let tabContainerSelector = this.tabNav.attr(TAB_CONTAINER_SELECTOR);

    if (this.$tabContainer.length === 0) {
      return;
    }

    this.$elem.on('click', (e) => {
      let tab = null;
      let $target = $(e.target);
      let relation = $target.attr(TAB_RELATION_ATTR);

      if (relation)  {
        tab = this.$tabContainer.children('div[' + TAB_RELATION_ATTR + '=' + relation + ']')[0];
      } else {
        //Determine the target's position in the nav list in order to 'show'
        //the proper tab.
        let lis = $.makeArray(this.$elem.find('li'));
        let idx = lis.indexOf(e.target);

        // Bail if we cannot find the list item
        if (idx === -1) {
          return;
        }
        tab = this.$tabContainer.children('div')[idx];
     }

     TabService.activate(e.target, tab);

   }.bind(this));
  }

  static getFullSelectorString() {
    return `[${this.getComponentAttribute()}=${NAME}]`;
  }

}
