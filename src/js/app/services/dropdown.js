/**
 * Abstracts the DOM behavior for showing/hiding a dropdown
 * so it can be used in the dropdown directive or directly
 *
 * @author Cheston Lee(cheston@optimizely.com)
 */
export default class Dropdown {
  constructor() {
    this.SHOWN_CLASS = 'shown';
    this.ESCAPE_KEY = 27;
  }

  /**
   * Shows a dropdown
   * @param {HTMLElement} el the dropdown container
   */
  show($el) {
    let eventNS = ".dropdown-" + (new Date()).valueOf();

    $el.addClass(this.SHOWN_CLASS)
      .data('eventNS', eventNS);

    $(document).on("click" + eventNS, (event) => {
      if ($el.has(event.target).length === 0) {
        this.hide($el);
      }
    });

    $(document).on("keyup" + eventNS, (event) => {
      if (event.keyCode === this.ESCAPE_KEY) {
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
    $el.removeClass(this.SHOWN_CLASS);
  }

  /**
   * Toggles the dropdown
   * @param {HTMLElement} el the dropdown container
   */
  toggle($el) {
    if ($el.hasClass(this.SHOWN_CLASS)) {
      this.hide($el);
    } else {
      this.show($el);
    }
  }
}
