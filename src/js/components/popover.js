jQuery.noConflict();

(function($) {

  $(document).on( "click", "[data-oui-pop-type='over']", function(e) {

    var ARROW_SIZE = 7;
    var ACTIVE_POP_ID = "data-oui-active-pop-id";

    // Prevent clicks from going through so the popover can stay visible when clicked.
    e.stopPropagation();
    e.preventDefault();

    // Remove any existing popovers.
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

    // Strip the ID, add active ID value to the attr, and append.
    $popHTML.removeAttr("id").attr(ACTIVE_POP_ID, popID).appendTo("body");

    // If a width is specified via data attr set the width of the popover.
    // Otherwise it defaults to a max-width specificed in the CSS.
    var popWidth = trigger.dataAttrs[0].ouiPopWidth;

    if ( popWidth !== undefined ) {
      $("["+ACTIVE_POP_ID+"]").css({
        width: popWidth,
        maxWidth: popWidth // Need to set to override default max-width.
      })
    }

    // Get properities (heigh/width/etc) of the `pop` element.
    var pop = getProps( $("["+ACTIVE_POP_ID+"]") );

    // Show the poptip.
    showPop(trigger, pop, ARROW_SIZE);

  });

  $(document).on( "click", "[data-oui-popover-close]", function(e) {
    // Find active popover and remove it.
    $pop = $(this).closest("[data-oui-popover]");
    $pop.remove();
  });

  $(document).on( "click", function(e) {

    // If clicking outside of active pop up hide it, otherwise do nothing.
    var ACTIVE_POP_ID = "data-oui-active-pop-id";

    if ( !$(e.target).closest("["+ACTIVE_POP_ID+"]").length ) {
      $("["+ACTIVE_POP_ID+"]").remove()
    }
  });


})( jQuery );
