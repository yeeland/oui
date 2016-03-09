(function($) {

  $(document).on( "click", "[data-oui-pop-type='pop--over']", function(e) {

    var ARROW_SIZE = 7;
    var POPOVER = "data-oui-popover";
    var TRIGGER_CLASS = "is-pop-trigger";

    // Prevent clicks from going through so the popover can stay visible when clicked.
    e.stopPropagation();
    e.preventDefault();

    // Get trigger element.
    var $trigger = $(this);

    // If trigger is clicked more than once leave the current popover showing.
    if ( !$trigger.hasClass(TRIGGER_CLASS) ) {

      // Remove trigger class from open popovers.
      $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);

      // Identify this as the current popover trigger.
      $trigger.addClass(TRIGGER_CLASS);

      // Get the properties of the trigger.
      var trigger = ouiGetProps( $(this) );

      // Get html from data attr.
      var popID = trigger.dataAttrs[0].ouiPopId;

      // If a width is specified via data attr set the width of the popover.
      // Otherwise it defaults to a max-width specificed in the CSS.
      var popWidth = trigger.dataAttrs[0].ouiPopWidth;

      // Remove any existing popovers.
      $("["+POPOVER+"]").remove();

      $.get('popovers/'+popID+'.html',function(data) {

        $('body').append(data);

        // If the width hasn't been set by the attribute.
        if ( popWidth !== undefined ) {
          $("["+POPOVER+"]").css({
            width: popWidth,
            maxWidth: popWidth // Need to set to override default max-width.
          })
        }

        // Get properities (heigh/width/etc) of the `pop` element.
        var pop = ouiGetProps( $("["+POPOVER+"]") );

        // Show the poptip.
        ouiShowPop(trigger, pop, ARROW_SIZE);

        $("[data-oui-popover-close]").bind('click.ouiPopoverClose', function(e) {
          // Remove trigger class from open popovers.
          $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);
          // Remove active popover.
          $("["+POPOVER+"]").remove();
          // Unbind the close listener.
          $("[data-oui-popover-close]").unbind('click.ouiPopoverClose');
        });

        // If it's an editable popover.
        if ( $("[data-oui-editable]").length ) {
          var currTxt = $trigger.text();
          $(".text-input").val(currTxt);

          $("[data-oui-editable-accept]").bind('click.ouiPopoverAccept', function(e) {
            var newText = $(".text-input").val();
            $("." + TRIGGER_CLASS).text(newText);
            $("[data-oui-popover-close]").click();
            $("[data-oui-editable-accept]").unbind('click.ouiPopoverAccept');
          });

        }

        // click.ouiPopover provides a namespace handler that can be unbound
        // without affecting other handlers attached to the document
        // http://stackoverflow.com/questions/209029/best-way-to-remove-an-event-handler-in-jquery
        $(document).bind('click.ouiPopover', function(e) {
          if ( !$(e.target).closest("["+POPOVER+"]").length ) {
            // Remove trigger class from open popovers.
            $("." + TRIGGER_CLASS).removeClass(TRIGGER_CLASS);
            // Remove active popover.
            $("["+POPOVER+"]").remove();
            // Remove handler.
            $(document).unbind('click.ouiPopover');
          }
        });

      });
    }
  });

})( jQuery );
