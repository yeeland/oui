jQuery.noConflict();

(function($) {

  $(document).on( "click", "[data-oui-pop-type='over']", function(e) {

    e.preventDefault();

    var POPOVER_DEFAULT_WIDTH = 250;

    // Remove any existing popovers.
    $("body > .pop--over").remove();

    // Get trigger element.
    var $trigger = $(this);

    // Get the properties of the trigger.
    var trigger = getProps( $(this) );

    // Set arrow size.
    var ARROW_SIZE = 7;

    // Get html file name from data attr.
    var popHTML = trigger.dataAttrs[0].ouiPopHtml;

    $.get( "../src/js/html/" + popHTML + ".html", function(data) {

      // Append popover to the body.
      $("body").append(data);

      // Now get properities (heigh/width/etc) of the `pop` element.
      var pop = getProps( $(".pop--over") );

      // Show the poptip.
      showPop(trigger, pop, ARROW_SIZE);

    });

  });

})( jQuery );
