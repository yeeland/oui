(function($) {

  $(document).on({
    mouseenter: function () {

      var ARROW_SIZE = 7;

      // Get the properties of the trigger.
      var trigger = ouiGetProps( $(this) );

      // Insert the poptip.
      $("body").append("<div class='OUI_JS_NAMESPACEpop OUI_JS_NAMESPACEpop--tip' />");

      // Add the text in.
      $(".OUI_JS_NAMESPACEpop--tip").text(trigger.dataAttrs[0].ouiPopText);

      // Now get properities (heigh/width/etc) of the `pop` element.
      var pop = ouiGetProps( $(".OUI_JS_NAMESPACEpop--tip") );

      // // Show the poptip.
      ouiShowPop(trigger, pop, ARROW_SIZE);
    },
    mouseleave: function () {
      // After leaving trigger hover destroy the `pop` element.
      $(".OUI_JS_NAMESPACEpop--tip").remove();
    }
  }, "[data-oui-pop-type='pop--tip']");

})( jQuery );
