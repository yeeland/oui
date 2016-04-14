(function($) {
  var DROPDOWN = '[data-oui-dropdown]';
  var ACTIVE_CLASS = 'is-active';

  // Close any open dropdowns.
  function ouiCloseAllDropdowns() {

    var DROPDOWN_TOGGLE = '[data-oui-dropdown-toggle]';

    $(DROPDOWN).removeClass(ACTIVE_CLASS);
    $(DROPDOWN_TOGGLE).removeClass(ACTIVE_CLASS);
  }

  // Trigger a dropdown.
  $(document).on('click', '[data-oui-dropdown-toggle]', function(e) {

    e.stopPropagation();

    var dropdown_parent = $(this).closest(DROPDOWN);

    // Close any other dropdowns.
    ouiCloseAllDropdowns();

    // If the clicked dropdown is NOT open.
    if (!dropdown_parent.hasClass(ACTIVE_CLASS)) {
      // Open the clicked dropdown.
      dropdown_parent.addClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);
    }

    // Clicking anywhere outside of dropdown.
    // Only attaches if a dropdown has been triggered.

    $(document).bind('click.ouiDropdown', function() {

      // If any dropdown is visible.
      if ($(DROPDOWN).hasClass(ACTIVE_CLASS)) {
        ouiCloseAllDropdowns();
      }

      $(document).unbind('click.ouiDropdown');

    });

  });


})(jQuery);
