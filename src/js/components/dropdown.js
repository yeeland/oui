(function($, window, document) {

  var DROPDOWN        = "[data-dropdown]";
  var DROPDOWN_TOGGLE = "[data-dropdown-toggle]";
  var ACTIVE_CLASS    = "is-active";

  // Close any open dropdowns.
  function resetDropdowns() {
    $(DROPDOWN).removeClass(ACTIVE_CLASS);
    $(DROPDOWN_TOGGLE).removeClass(ACTIVE_CLASS);
  }

  // Trigger a dropdown.
  $(document).on("click", DROPDOWN_TOGGLE, function(e) {
    e.stopPropagation();
    var dropdown_parent = $(this).closest(DROPDOWN);

    if ( !dropdown_parent.hasClass(ACTIVE_CLASS) ) {
      // If click on dropdown toggle and it's active.
      resetDropdowns();
      dropdown_parent.addClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);
    } else {
      resetDropdowns();
    }
  });

  $(document).on("click", function(e) {
    // If any dropdown is visible.
    if ( $(DROPDOWN).hasClass(ACTIVE_CLASS) ) {
      resetDropdowns();
    }
  });

}(window.jQuery, window, document));
