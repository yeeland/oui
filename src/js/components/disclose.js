(function($) {

  $(document).on( "click", "[data-oui-disclose-link]", function(e) {

    e.preventDefault();

    // Find parent disclose.
    $parent = $(this).closest("[data-oui-disclose]");

    // The CSS handles the show/hide of the content.
    $parent.toggleClass("is-active");
  });

})( jQuery );
