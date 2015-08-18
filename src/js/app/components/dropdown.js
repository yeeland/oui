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

export default class Dropdown extends BaseController {
  constructor() {
    super();
    this.ACTIVATOR_SELECTOR = '[data-show-dropdown]';
    this.TOGGLE_SELECTOR = '[data-toggle-dropdown]';
    this.HIDE_SELECTOR = '[data-hide-dropdown]';
    this.selector = 'dropdown';
    this.service = new DropdownService();
  }

  bind() {
    let $el = $(`[${this.attribute}=${this.selector}]`);
    $el.on('click', this.ACTIVATOR_SELECTOR, this.service.show.bind(this.service, $el));
    $el.on('click', this.TOGGLE_SELECTOR, this.service.toggle.bind(this.service, $el));
    $el.on('click', this.HIDE_SELECTOR, this.service.hide.bind(this.service, $el));
  }
}
