jQuery.noConflict();

(function($) {


  $(document).on( "click", "[data-oui-pop-type='over']", function(e) {

    var ARROW_SIZE = 7;
    var ACTIVE_POP_ID = "data-oui-active-pop-id";

    e.stopPropagation();
    e.preventDefault();


    $("["+ACTIVE_POP_ID+"]").remove();

    // Get trigger element.
    var $trigger = $(this);

    // Get the properties of the trigger.
    var trigger = getProps( $(this) );

    // Get html from data attr.
    var popID = trigger.dataAttrs[0].ouiPopId;

    // Reset the classes to remove any existing arrow classes.
    $("#" + popID).attr("class", "pop pop--over");

    // Clone the target html.
    var $popHTML = $("#" + popID).clone();

    // Strip the ID, add active class, and append.
    $popHTML.removeAttr("id").attr(ACTIVE_POP_ID, popID).appendTo("body");

    var popWidth = trigger.dataAttrs[0].ouiPopWidth;

    // If a width is specified attach it to the popover.
    if ( popWidth !== undefined ) {
      $("["+ACTIVE_POP_ID+"]").css("width", popWidth )
    }

    // Now get properities (heigh/width/etc) of the `pop` element.
    var pop = getProps( $("["+ACTIVE_POP_ID+"]") );

    // Show the poptip.
    showPop(trigger, pop, ARROW_SIZE);

  });

  $(document).on( "click", ".popover__close", function(e) {
    // Find active popover and remove it.
    $pop = $(this).closest(".pop--over");
    $pop.remove();
  });

  $(document).on( "click", function(e) {
    // If clicking outside of active pop up hide it, otherwise do nothing.
    if ( !$(e.target).closest(".pop--over").length ) {
      $("[data-oui-active-pop-id]").remove()
    }
  });


})( jQuery );
