jQuery.noConflict();

(function($) {

  $(document).on( "click", ".disclose__link", function(e) {
    e.stopPropagation();
    $parent = $(this).closest(".disclose");
    $parent.toggleClass("is-active");
  });

})( jQuery );
