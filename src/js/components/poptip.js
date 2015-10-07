(function($, window, document) {

  var ARROW_SIZE = 7;

  $(document).on({
    mouseenter: function () {
      var el = getProps( $(this) );
      var text = $(this).data("poptip-text");

      $("body").append("<div class='pop-tip pop-tip--arrow-left'>");
      $(".pop-tip").text(text);

      var poptip = getProps( $(".pop-tip") );

      $(".pop-tip").css({
        // Left
        top: el.top + el.height / 2 - poptip.height / 2,
        left: el.left + el.width + ARROW_SIZE
        // Right
        // top: el.top + el.height / 2 - poptip.height / 2,
        // left: el.left - poptip.width - ARROW_SIZE
        // Bottom Left
        // top: el.top + el.height + ARROW_SIZE,
        // left: el.left
        // Bottom Center
        // top: el.top + el.height + ARROW_SIZE,
        // left: el.left + el.width / 2 - poptip.width / 2
        // Bottom Right
        // top: el.top + el.height + ARROW_SIZE,
        // left: el.left - poptip.width + el.width
        // Top Right
        // top: el.top - poptip.height - ARROW_SIZE,
        // left: el.left - poptip.width + el.width
        // Top left
        // top: el.top - poptip.height - ARROW_SIZE,
        // left: el.left
        // Top Center
        // top: el.top - poptip.height - ARROW_SIZE,
        // left: el.left + el.width / 2 - poptip.width / 2
      }).fadeIn("fast");
    },
    mouseleave: function () {
      $(".pop-tip").remove();
    }
  }, "[data-poptip]");

}(window.jQuery, window, document));