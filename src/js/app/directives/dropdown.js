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
 */
define(function() {
  var ACTIVATOR_SELECTOR = '[data-show-dropdown]';
  var TOGGLE_SELECTOR    = '[data-toggle-dropdown]';
  var HIDE_SELECTOR      = '[data-hide-dropdown]';

  var dropdownService = require('app/services/dropdown');

  return {
    isEmpty: true,

    bind: function() {
      var $el = $(this.el);
      $el.on('click', ACTIVATOR_SELECTOR, dropdownService.show.bind(dropdownService, this.el));
      $el.on('click', TOGGLE_SELECTOR, dropdownService.toggle.bind(dropdownService, this.el));
      $el.on('click', HIDE_SELECTOR, dropdownService.hide.bind(dropdownService, this.el));
    }
  };
});
