(function($) {

  $(document).on( "click", "[data-oui-pop-type='pop--over']", function(e) {

    var ARROW_SIZE = 7;
    var ACTIVE_POP_ID_ATTR = "data-oui-active-pop-id";
    var TRIGGER_CLASS = "is-pop-trigger";

    // Prevent clicks from going through so the popover can stay visible when clicked.
    e.stopPropagation();
    e.preventDefault();

    // Get trigger element.
    var $trigger = $(this);

    // Get the properties of the trigger.
    var trigger = ouiGetProps( $(this) );

    // Get html from data attr.
    var popID = trigger.dataAttrs[0].ouiPopId;

    // Do the math and show the popover.
    function ouiCalclate($trigger) {
      // If a width is specified via data attr set the width of the popover.
      // Otherwise it defaults to a max-width specificed in the CSS.
      var popWidth = trigger.dataAttrs[0].ouiPopWidth;

      if ( popWidth !== undefined ) {
        $("["+ACTIVE_POP_ID_ATTR+"]").css({
          width: popWidth,
          maxWidth: popWidth // Need to set to override default max-width.
        })
      }

      // Get properities (heigh/width/etc) of the `pop` element.
      var pop = ouiGetProps( $("["+ACTIVE_POP_ID_ATTR+"]") );

      // Show the poptip.
      ouiShowPop(trigger, pop, ARROW_SIZE);
    }

    // Test is see if users is clicking on trigger they just clicked
    // if so do nothing
    if ( !$trigger.hasClass(TRIGGER_CLASS) ) {

      // Remove trigger class from open popovers.
      $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);

      // Identify this as the current popover trigger.
      $trigger.addClass(TRIGGER_CLASS);

      // Remove any existing popovers.
      $("["+ACTIVE_POP_ID_ATTR+"]").remove();

      if ( popID == "editable-input") {

        var curText = $(this).text();

        $.get('editable/editable-input.html',function(data) {
          $('body').append(data);
          $(".text-input").val(curText);

          // Do the math and show the popover.
          ouiCalclate($trigger)

          $("[data-oui-editable-close]").on('click', function() {
            $("[data-oui-editable]").remove();
            // Remove trigger class from open popovers.
            $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);
          });

          $("[data-oui-editable-accept]").on('click', function() {
            var newText = $(".text-input").val();
            console.log($(".text-input"));
            $(".is-pop-trigger").text(newText);
            $("[data-oui-editable]").remove();
            // Remove trigger class from open popovers.
            $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);
          });

        });

      } else {
        // Reset the classes to remove any existing arrow classes.
        $("#" + popID).attr("class", "#{OUI_JS_NAMESPACE}pop #{OUI_JS_NAMESPACE}pop--over");

        // Clone the target html.
        var $popHTML = $("#" + popID).clone();

        // Strip the ID, add active ID value to the attr, and append.
        $popHTML.removeAttr("id").attr(ACTIVE_POP_ID_ATTR, popID).appendTo("body");

        // Do the math and show the popover.
        ouiCalclate($trigger)

      }

      $("[data-oui-popover-close]").on('click', function(e) {

        // Find active popover and remove it.
        $pop = $(this).closest("[data-oui-popover]");

        // Remove trigger class from open popovers.
        $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);

        $pop.remove();
      });

      // click.ouiPopover provides a namespace handler that can be unbound
      // without affecting other handlers attached to the document
      // http://stackoverflow.com/questions/209029/best-way-to-remove-an-event-handler-in-jquery
      $(document).bind('click.ouiPopover', function(e) {

        // If clicking outside of active pop up hide it, otherwise do nothing.
        var ACTIVE_POP_ID_ATTR = "data-oui-active-pop-id";

        if ( !$(e.target).closest("["+ACTIVE_POP_ID_ATTR+"]").length ) {

          // Remove trigger class from open popovers.
          $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);

          // Remove active popover.
          $("["+ACTIVE_POP_ID_ATTR+"]").remove();

          // Remove any editables.
          $("[data-oui-editiable]").remove();

          $(document).unbind('click.ouiPopover');
        }

      });

    }

  });

})( jQuery );
