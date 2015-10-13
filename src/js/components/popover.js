(function($, window, document) {


  $(document).on( "click", "[data-pop-type='over']", function() {
    var ARROW_SIZE = 7;

    // Get the properties of the trigger.
    var trigger = getProps( $(this) );

    // Now get properities (heigh/width/etc) of the `pop` element.
    var pop = getProps( $(".pop--over") );

    // Show the poptip.
    showPop(trigger, pop, ARROW_SIZE);

  });

}(window.jQuery, window, document));
