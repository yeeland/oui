/**
 * Dropdown directive
 * This directive is a port of optly.Dropdown
 * optly.Dropdown is deprecated and should be removed once all instances are refactored
 *
 * This is an empty directive, meaning it is attached via:
 * <div v-dropdown>
 * no value is needed
 *
 * Tagging a child element with `data-show-dropdown` will show the dropdown
 * when that element is clicked
 *
 * Tagging a child element with `data-hide-dropdown` will hide the dropdown
 * when that element is clicked
 *
 * Ex markup:
 * <div class="dropdown" v-dropdown>
 *  <a class="dropdown-activator" data-show-dropdown>Show dropdown</a>
 *  <ul class="dropdown-body">
 *    <li>item 1</li>
 *    <li>item 2</li>
 *    <li data-hide-dropdown>I hide the dropdown when clicked</li>
 *  </ul>
 * </div>
 *
 * @author Cheston Lee(cheston@optimizely.com)
 */

import BaseController from './base';
import DropdownService from '../services/dropdown';

const NAME = 'dropdown';
const ACTIVATOR_SELECTOR = '[data-show-dropdown]';
const TOGGLE_SELECTOR = '[data-toggle-dropdown]';
const HIDE_SELECTOR = '[data-hide-dropdown]';

export default class Dropdown extends BaseController {
  constructor(elem) {
    super(elem);
    this.service = new DropdownService();
  }

  bind() {
    this.$elem.on('click', ACTIVATOR_SELECTOR, this.service.show.bind(this.service, this.$elem));
    this.$elem.on('click', TOGGLE_SELECTOR, this.service.toggle.bind(this.service, this.$elem));
    this.$elem.on('click', HIDE_SELECTOR, this.service.hide.bind(this.service, this.$elem));
  }

  static getFullSelectorString() {
    return `[${this.getComponentAttribute()}=${NAME}]`;
  }
}
