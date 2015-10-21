jQuery.noConflict();

(function($) {

  $(document).on( "click", "[data-oui-pop-type='over']", function(e) {

    e.preventDefault();

    var ARROW_SIZE = 7;

    $("[data-oui-active-pop-id]").remove();

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
    $popHTML.removeAttr("id").attr("data-oui-active-pop-id", popID).appendTo("body");

    var popWidth = trigger.dataAttrs[0].ouiPopWidth;

    // If a width is specified attach it to the popover.
    if ( popWidth !== undefined ) {
        $("[data-oui-active-pop-id]").css("width", popWidth )
    }

    // Now get properities (heigh/width/etc) of the `pop` element.
    var pop = getProps( $("[data-oui-active-pop-id]") );

    // Show the poptip.
    showPop(trigger, pop, ARROW_SIZE);

  });

    $(document).on( "click", ".popover__close", function(e) {
        $pop = $(this).closest(".pop");
        $pop.remove();
    });


})( jQuery );
