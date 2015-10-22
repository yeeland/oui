// TODO: Add click outside of active area?

jQuery.noConflict();

(function($) {

  $(document).on( "click", "[data-oui-editable]", function(e) {

    var ACTIVE_CLASS = "is-editing";

    $("[data-oui-editable]").removeClass(ACTIVE_CLASS).show();

    // Remove any existing editing box.
    $(".edit-text").remove();

    $trigger = $(this);

    var trigger = getProps($trigger);

    $.get( "../src/js/html/editable.html", function( data ) {

      $trigger.addClass(ACTIVE_CLASS); // Hides the text user wants to edit.
      $(data).insertAfter($trigger); // Inserts editiable in same spot.

      // Get the text of the element to be edited.
      var text = $trigger.text();

      // Position the edit box using values from the trigger element.
      $(".edit-text").css({
        height        : trigger.height + convertInt(trigger.paddingTop) + convertInt(trigger.paddingBottom),
        marginBottom  : convertInt(trigger.marginBottom),
        marginTop     : convertInt(trigger.marginTop),
        marginLeft    : convertInt(trigger.marginLeft),
        marginRight   : convertInt(trigger.marginRight),
        paddingBottom : convertInt(trigger.paddingBottom),
        paddingTop    : convertInt(trigger.paddingTop),
        paddingLeft   : convertInt(trigger.paddingLeft),
        paddingRight  : convertInt(trigger.paddingRight),
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
    $(".is-editing").text(text).removeClass("is-editing");
    $(".edit-text").remove();
  })

  $(document).on( "click", "[data-edit-text-cancel]", function(e) {
    $(".is-editing").removeClass("is-editing");
    $(".edit-text").remove()
  })

})( jQuery );