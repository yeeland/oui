jQuery.noConflict();

(function($) {

  $(document).on("click", ".accordion__link", function(e) {

    e.stopPropagation();

    var ACTIVE_CLASS = "is-active";
    var DURATION = 100;

    var $target = $(this).closest(".accordion__item");

    if ( !$target.hasClass(ACTIVE_CLASS) ) {

      var $accordion = $(this).closest(".accordion");
      var $curActive = $accordion.find("." + ACTIVE_CLASS);
      var paneHeight = $curActive.outerHeight();

      $target.animate({
        height: paneHeight
      }, {
        duration: DURATION,
        queue: false,
        complete: function() {
          $accordion.find("." + ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
          $target.addClass(ACTIVE_CLASS);
          $target.removeAttr("style");
        }
      });
    }
  });

})( jQuery );
