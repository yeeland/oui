(function($, window, document) {


  $(document).on({
    mouseenter: function () {

      var ARROW_SIZE = 7;

      // Get the properties of the trigger.
      var trigger = getProps( $(this) );

      // Insert the poptip.
      $("body").append("<div class='pop pop--tip'>");

      // Add the text in.
      $(".pop--tip").text(trigger.dataAttrs[0].popText);

      // Now get properities (heigh/width/etc) of the `pop` element.
      var pop = getProps( $(".pop--tip") );

      // // Show the poptip.
      showPop(trigger, pop, ARROW_SIZE);
    },
    mouseleave: function () {
      // After leaving trigger hover destroy the `pop` element.
      $(".pop--tip").remove();
    }
  }, "[data-pop-type='tip']");

}(window.jQuery, window, document));
