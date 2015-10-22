jQuery.noConflict();

(function($) {

  function dropdownVars() {
    var DROPDOWN        = "[data-oui-dropdown]";
    var DROPDOWN_TOGGLE = "[data-oui-dropdown-toggle]";
    var ACTIVE_CLASS    = "is-active";
    return [DROPDOWN, DROPDOWN_TOGGLE, ACTIVE_CLASS]
  }

  // Close any open dropdowns.
  function closeAllDropdowns() {
    $(dropdownVars()[0]).removeClass(dropdownVars()[2]);
    $(dropdownVars()[1]).removeClass(dropdownVars()[2]);
  }

  // Trigger a dropdown.
  $(document).on("click", "[data-oui-dropdown-toggle]", function(e) {

    e.stopPropagation();
    dropdownVars();

    var dropdown_parent = $(this).closest(dropdownVars()[0]);

    // Close any other dropdowns.
    closeAllDropdowns();

    // If the clicked dropdown is NOT open.
    if ( !dropdown_parent.hasClass(dropdownVars()[2]) ) {
      // Open the clicked dropdown.
      dropdown_parent.addClass(dropdownVars()[2]);
      $(this).addClass(dropdownVars()[2]);
    }

  });

  // Clicking anywhere outside of dropdown.
  $(document).on("click", function(e) {

    dropdownVars();

    // If any dropdown is visible.
    if ( $(dropdownVars()[0]).hasClass(dropdownVars()[2]) ) {
      closeAllDropdowns();
    }
  });

})( jQuery );