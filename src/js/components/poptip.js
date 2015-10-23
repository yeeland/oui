(function($) {

  $(document).on({
    mouseenter: function () {

      var ARROW_SIZE = 7;

      // Get the properties of the trigger.
      var trigger = ouiGetProps( $(this) );

      // Insert the poptip.
      $("body").append("<div class='pop pop--tip'>");

      // Add the text in.
      $(".pop--tip").text(trigger.dataAttrs[0].ouiPopText);

      // Now get properities (heigh/width/etc) of the `pop` element.
      var pop = ouiGetProps( $(".pop--tip") );

      // // Show the poptip.
      ouiShowPop(trigger, pop, ARROW_SIZE);
    },
    mouseleave: function () {
      // After leaving trigger hover destroy the `pop` element.
      $(".pop--tip").remove();
    }
  }, "[data-oui-pop-type='tip']");

})( jQuery );
