/**
 * Abstracts the DOM behavior for showing/hiding a dropdown
 * so it can be used in the dropdown directive or directly
 *
 * @author Cheston Lee(cheston@optimizely.com)
 */

const SHOWN_CLASS = 'shown';
const ESCAPE_KEY = 27;

export default class Dropdown {
  constructor() {}

  /**
   * Shows a dropdown
   * @param {HTMLElement} el the dropdown container
   */
  show($el) {
    let eventNS = ".dropdown-" + (new Date()).valueOf();

    $el.addClass(SHOWN_CLASS)
      .data('eventNS', eventNS);

    $(document).on("click" + eventNS, (event) => {
      if ($el.has(event.target).length === 0) {
        this.hide($el);
      }
    });

    $(document).on("keyup" + eventNS, (event) => {
      if (event.keyCode === ESCAPE_KEY) {
        this.hide($el);
      }
    });
  }

  /**
   * Hides a dropdown
   * @param {HTMLElement} el the dropdown container
   */
  hide($el) {
    let eventNS = $el.data('eventNS');

    if (eventNS) {
      $(document).off(eventNS);
      $el.removeData('eventNS');
    }
    $el.removeClass(SHOWN_CLASS);
  }

  /**
   * Toggles the dropdown
   * @param {HTMLElement} el the dropdown container
   */
  toggle($el) {
    if ($el.hasClass(SHOWN_CLASS)) {
      this.hide($el);
    } else {
      this.show($el);
    }
  }
}
