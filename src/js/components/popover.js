(function($) {

  $(document).on('click', '[data-oui-pop-type=\'pop--over\']', function(e) {

    var ARROW_SIZE = 7;
    var ACTIVE_POP_ID = 'data-oui-active-pop-id';

    // Prevent clicks from going through so the popover can stay visible when clicked.
    e.stopPropagation();
    e.preventDefault();

    // Remove any existing popovers.
    $('[' + ACTIVE_POP_ID + ']').remove();

    // Get the properties of the trigger.
    var trigger = ouiGetProps($(this));

    // Get html from data attr.
    var popID = trigger.dataAttrs[0].ouiPopId;

    // Reset the classes to remove any existing arrow classes.
    $('#' + popID).attr('class', '#{OUI_JS_NAMESPACE}pop #{OUI_JS_NAMESPACE}pop--over');

    // Clone the target html.
    var $popHTML = $('#' + popID).clone();

    // Strip the ID, add active ID value to the attr, and append.
    $popHTML.removeAttr('id').attr(ACTIVE_POP_ID, popID).appendTo('body');

    // If a width is specified via data attr set the width of the popover.
    // Otherwise it defaults to a max-width specificed in the CSS.
    var popWidth = trigger.dataAttrs[0].ouiPopWidth;

    if (popWidth !== undefined) {
      $('[' + ACTIVE_POP_ID + ']').css({
        width: popWidth,
        maxWidth: popWidth, // Need to set to override default max-width.
      });
    }

    // Get properities (heigh/width/etc) of the `pop` element.
    var pop = ouiGetProps($('[' + ACTIVE_POP_ID + ']'));

    // Show the poptip.
    ouiShowPop(trigger, pop, ARROW_SIZE);

    $('[data-oui-popover-close]').on('click', function() {
      // Find active popover and remove it.
      var $pop = $(this).closest('[data-oui-popover]');
      $pop.remove();
    });

    // click.ouiPopover provides a namespace handler that can be unbound
    // without affecting other handlers attached to the document
    // http://stackoverflow.com/questions/209029/best-way-to-remove-an-event-handler-in-jquery
    $(document).bind('click.ouiPopover', function() {

      // If clicking outside of active pop up hide it, otherwise do nothing.
      if (!$(e.target).closest('[' + ACTIVE_POP_ID + ']').length) {
        $('[' + ACTIVE_POP_ID + ']').remove();
      }

      $(document).unbind('click.ouiPopover');

    });

  });

})(jQuery);
