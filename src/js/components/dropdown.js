(function($) {

  // Close any open dropdowns.
  function ouiCloseAllDropdowns() {

    var DROPDOWN        = "[data-oui-dropdown]";
    var DROPDOWN_TOGGLE = "[data-oui-dropdown-toggle]";
    var ACTIVE_CLASS    = "is-active";

    $(DROPDOWN).removeClass(ACTIVE_CLASS);
    $(DROPDOWN_TOGGLE).removeClass(ACTIVE_CLASS);
  }

  // Trigger a dropdown.
  $(document).on("click", "[data-oui-dropdown-toggle]", function(e) {

    e.stopPropagation();

    var DROPDOWN        = "[data-oui-dropdown]";
    var ACTIVE_CLASS    = "is-active";

    var dropdown_parent = $(this).closest(DROPDOWN);

    // Close any other dropdowns.
    ouiCloseAllDropdowns();

    // If the clicked dropdown is NOT open.
    if ( !dropdown_parent.hasClass(ACTIVE_CLASS) ) {
      // Open the clicked dropdown.
      dropdown_parent.addClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);
    }

    // Clicking anywhere outside of dropdown.
    // Only attaches if a dropdown has been triggered.

    $(document).bind('click.ouiDropdown', function() {

      var DROPDOWN        = "[data-oui-dropdown]";
      var ACTIVE_CLASS    = "is-active";

      // If any dropdown is visible.
      if ( $(DROPDOWN).hasClass(ACTIVE_CLASS) ) {
        ouiCloseAllDropdowns();
      }

      $(document).unbind('click.ouiDropdown');

    });

  });


})( jQuery );