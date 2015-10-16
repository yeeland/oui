(function($, window, document) {

  $(document).on( "click", ".disclose__link", function(e) {
    $parent = $(this).closest(".disclose");
    $parent.toggleClass("is-active");
  });

}(window.jQuery, window, document));
