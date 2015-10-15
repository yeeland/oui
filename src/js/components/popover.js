(function($, window, document) {

  $(document).on( "click", "[data-pop-type='over']", function(e) {

    var POPOVER_DEFAULT_WIDTH = 250;

    e.preventDefault();

    // Get trigger element.
    var $trigger = $(this);

    // Get the properties of the trigger.
    var trigger = getProps( $(this) );

    // Set arrow size.
    var ARROW_SIZE = 7;

    // Get html file name from data attr.
    var popHTML = trigger.dataAttrs[0].popHtml;

    // If this is editable text.
    if ( $trigger.hasClass("edit") ) {
      // Remove any existing text edit popover.
      $("[data-text-edit]").remove();
      $(".edit.is-active").removeClass("is-active");
    }

    $.get( "../src/js/html/" + popHTML + ".html", function(data) {

      // Append popover to the body.
      $("body").append(data);

      // Now get properities (heigh/width/etc) of the `pop` element.
      var pop = getProps( $(".pop--over") );

      // Show the poptip.
      showPop(trigger, pop, ARROW_SIZE);

      // If this is an edit text field popover
      if ( popHTML == "edit--input" || popHTML == "edit--textarea" ) {

        if ( trigger.outerWidth > POPOVER_DEFAULT_WIDTH ) {
          $(".pop").css({ width: trigger.outerWidth, maxWidth: trigger.outerWidth });
        }

        $trigger.addClass("is-active");
        populateInput(pop, $trigger);
      }

    });

  });

}(window.jQuery, window, document));
