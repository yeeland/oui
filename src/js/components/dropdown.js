(function($, window, document) {

  var DROPDOWN        = "[data-dropdown]";
  var DROPDOWN_TOGGLE = "[data-dropdown-toggle]";
  var ACTIVE_CLASS    = "is-active";

  // Close any open dropdowns.
  function closeAllDropdowns() {
    $(DROPDOWN).removeClass(ACTIVE_CLASS);
    $(DROPDOWN_TOGGLE).removeClass(ACTIVE_CLASS);
  }

  // Trigger a dropdown.
  $(document).on("click", DROPDOWN_TOGGLE, function(e) {
    e.stopPropagation();
    var dropdown_parent = $(this).closest(DROPDOWN);

    // If the clicked dropdown is NOT open.
    if ( !dropdown_parent.hasClass(ACTIVE_CLASS) ) {

      // Close any other dropdowns.
      closeAllDropdowns();

      // Open the clicked dropdown.
      dropdown_parent.addClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);
    } else {
      // If dropdown is open.
      closeAllDropdowns();
    }
  });

  // Clicking anywhere outside of dropdown.
  $(document).on("click", function(e) {
    // If any dropdown is visible.
    if ( $(DROPDOWN).hasClass(ACTIVE_CLASS) ) {
      closeAllDropdowns();
    }
  });

}(window.jQuery, window, document));
