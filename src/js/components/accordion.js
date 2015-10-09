(function($, window, document) {

  $(document).on("click", ".accordion__link", function(e) {
    e.stopPropagation();

    var $target = $(this).closest(".accordion__item");

    if ( !$target.hasClass("is-active") ) {

      var $accordion = $(this).closest(".accordion");
      var $curActive = $accordion.find(".is-active");
      var paneHeight = $curActive.outerHeight();

      $target.animate({
        height: paneHeight
      }, {
        duration: 200,
        queue: false,
        complete: function() {
          $accordion.find(".is-active").removeClass("is-active");
          $target.addClass("is-active");
          $target.removeAttr("style");
        }
      });

    }
  });


}(window.jQuery, window, document));
