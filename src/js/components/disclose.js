jQuery.noConflict();

(function($) {

  $(document).on( "click", ".disclose__link", function(e) {
    e.stopPropagation();
    $parent = $(this).closest(".disclose");

    // By adding this class the CSS handles the show/hide of the content.
    $parent.toggleClass("is-active");
  });

})( jQuery );
