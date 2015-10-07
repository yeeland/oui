(function($, window, document) {

  $(document).on({
    mouseenter: function () {
      $("body").append("<div class='poptip'/>");
      var el = getProps( $(this) );
      $(".poptip").css({
        top: el.top,
        left: el.left
      }).fadeIn("fast");
    },
    mouseleave: function () {
      $(".poptip").remove();
    }
  }, "[data-poptip]");

}(window.jQuery, window, document));