(function($) {

  $(document).on( "click", "[data-oui-editable]", function(e) {

    var ACTIVE_CLASS = "edit-text-trigger";

    $("[data-oui-editable]").removeClass(ACTIVE_CLASS).show();

    // Remove any existing editing box.
    $(".edit-text").remove();

    $trigger = $(this);

    var trigger = ouiGetProps($trigger);

    $.get( "../dist/js/html/editable.html", function( data ) {

      $trigger.addClass(ACTIVE_CLASS); // Hides the text user wants to edit.
      $(data).insertAfter($trigger); // Inserts editiable in same spot.

      // Get the text of the element to be edited.
      var text = $trigger.text();

      // Position the edit box using values from the trigger element.
      $(".edit-text").css({
        height        : trigger.height + ouiConvertInt(trigger.paddingTop) + ouiConvertInt(trigger.paddingBottom),
        marginBottom  : ouiConvertInt(trigger.marginBottom),
        marginTop     : ouiConvertInt(trigger.marginTop),
        marginLeft    : ouiConvertInt(trigger.marginLeft),
        marginRight   : ouiConvertInt(trigger.marginRight),
        paddingBottom : ouiConvertInt(trigger.paddingBottom),
        paddingTop    : ouiConvertInt(trigger.paddingTop),
        paddingLeft   : ouiConvertInt(trigger.paddingLeft),
        paddingRight  : ouiConvertInt(trigger.paddingRight),
      }).insertAfter($trigger)
        .show();

      // Need to fix this height due to FF issue.
      $(".edit-text__wrap").css({
        height: trigger.height
      })

      // Input text styling matches that of the trigger.
      $(".edit-text__input").css({
        lineHeight  : trigger.lineHeight,
        fontWeight  : trigger.fontWeight,
        fontStyle   : trigger.fontStyle,
        fontFamily  : trigger.fontFamily,
        fontSize    : trigger.fontSize
      })
        .val(text)
        .focus();
    })

  });

  $(document).on( "keypress", "textarea", function(e) {
    // If key is return/enter, perform a save.
    if (e.keyCode == 13) {
      e.preventDefault();
      $("[data-edit-text-save]").click();
    }
  });

  $(document).on( "click", "[data-edit-text-save]", function(e) {
    // On save, move the edited text back into the original element.
    var text = $(".edit-text__input").val();
    $(".edit-text-trigger").text(text).removeClass("edit-text-trigger");
    $(".edit-text").remove();
  })

  $(document).on( "click", "[data-edit-text-cancel]", function(e) {
    $(".edit-text-trigger").removeClass("edit-text-trigger");
    $(".edit-text").remove()
  })

})( jQuery );