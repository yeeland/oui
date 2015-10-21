jQuery.noConflict();

(function($) {

  // Close any open dropdowns.
  function closeAllDropdowns() {

    var DROPDOWN        = "[data-oui-dropdown]";
    var DROPDOWN_TOGGLE = "[data-oui-dropdown-toggle]";
    var ACTIVE_CLASS    = "is-active";

    $(DROPDOWN).removeClass(ACTIVE_CLASS);
    $(DROPDOWN_TOGGLE).removeClass(ACTIVE_CLASS);
  }

  // Trigger a dropdown.
  $(document).on("click", "[data-oui-dropdown-toggle]", function(e) {

    var DROPDOWN        = "[data-oui-dropdown]";
    var DROPDOWN_TOGGLE = "[data-oui-dropdown-toggle]";
    var ACTIVE_CLASS    = "is-active";

    e.stopPropagation();
    var dropdown_parent = $(this).closest(DROPDOWN);

    // Close any other dropdowns.
    closeAllDropdowns();

    // If the clicked dropdown is NOT open.
    if ( !dropdown_parent.hasClass(ACTIVE_CLASS) ) {
      // Open the clicked dropdown.
      dropdown_parent.addClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);
    }

  });

  // Clicking anywhere outside of dropdown.
  $(document).on("click", function(e) {

    var DROPDOWN        = "[data-oui-dropdown]";
    var DROPDOWN_TOGGLE = "[data-oui-dropdown-toggle]";
    var ACTIVE_CLASS    = "is-active";

    // If any dropdown is visible.
    if ( $(DROPDOWN).hasClass(ACTIVE_CLASS) ) {
      closeAllDropdowns();
    }
  });

})( jQuery );