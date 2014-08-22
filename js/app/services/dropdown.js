/**
 * Abstracts the DOM behavior for showing/hiding a dropdown
 * so it can be used in the dropdown directive or directly
 *
 * @author Jordan Garcia (jordan@optimizely.com)
 */
define(function() {
  var SHOWN_CLASS = 'shown';
  var ESCAPE_KEY  = 27;

  var service = {};


  /**
   * Shows a dropdown
   * @param {HTMLElement} el the dropdown container
   */
  service.show = function(el) {
    console.log('show');
    var eventNS = ".dropdown-" + (new Date()).valueOf();

    $(el)
      .addClass(SHOWN_CLASS)
      .data('eventNS', eventNS);

    $(document).on("click" + eventNS, function(event) {
      if ($(el).has(event.target).length === 0) {
        this.hide(el);
      }
    }.bind(this));

    $(document).on("keyup" + eventNS, function(event) {
      if (event.keyCode === ESCAPE_KEY) {
        this.hide(el);
      }
    }.bind(this));
  };

  /**
   * Hides a dropdown
   * @param {HTMLElement} el the dropdown container
   */
  service.hide = function(el) {
    console.log('hide');
    var eventNS = $(el).data('eventNS');

    if (eventNS) {
      $(document).off(eventNS);
      $(el).removeData('eventNS');
    }
    $(el).removeClass(SHOWN_CLASS);
  };

  /**
   * Toggles the dropdown
   * @param {HTMLElement} el the dropdown container
   */
  service.toggle = function(el) {
    console.log('Toggle');
    if ($(el).hasClass(SHOWN_CLASS)) {
      this.hide(el);
    } else {
      this.show(el);
    }
  }

  return service;
});
