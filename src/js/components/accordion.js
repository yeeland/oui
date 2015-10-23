(function($) {

  $(document).on("click", "[data-oui-accordion-link]", function(e) {

    e.preventDefault();

    var ACTIVE_CLASS = "is-active";
    var DURATION = 100;

    var $target = $(this).closest("[data-oui-accordion-item]");

    // If clicking the non-active [data-oui-accordion-item].
    if ( !$target.hasClass(ACTIVE_CLASS) ) {

      // Get parent accordion.
      var $accordion = $(this).closest("[data-oui-accordion]");
      var $curActive = $accordion.find("." + ACTIVE_CLASS);
      var paneHeight = $curActive.outerHeight(); // Get height of opened pane.

      $target.animate({
        height: paneHeight
      }, {
        duration: DURATION,
        queue: false,
        complete: function() {
          $accordion.find("." + ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
          $target.addClass(ACTIVE_CLASS);
          $target.removeAttr("style"); // Removing animated inline value height.
        }
      });
    }

  });

})( jQuery );
