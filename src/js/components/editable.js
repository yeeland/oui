jQuery.noConflict();

(function($) {

  $(document).on( "click", "[data-oui-editable]", function(e) {

    var ACTIVE_CLASS = "is-editing";

    $("[data-oui-editable]").removeClass(ACTIVE_CLASS).show();
    $(".edit-text").remove();

    $trigger = $(this);

    var trigger = getProps($trigger);

    $.get( "../src/js/html/edit-test.html", function( data ) {

      $(data).insertAfter($trigger);
      $trigger.addClass(ACTIVE_CLASS).hide();

      var text = $trigger.text();

      $(".edit-text").css({
        height: trigger.height + convertInt(trigger.paddingTop) + convertInt(trigger.paddingBottom),
        marginBottom: convertInt(trigger.marginBottom),
        marginTop: convertInt(trigger.marginTop),
        marginLeft: convertInt(trigger.marginLeft),
        marginRight: convertInt(trigger.marginRight),
        paddingBottom: convertInt(trigger.paddingBottom),
        paddingTop: convertInt(trigger.paddingTop),
        paddingLeft: convertInt(trigger.paddingLeft),
        paddingRight: convertInt(trigger.paddingRight),
      }).insertAfter($trigger)
        .show();

      $(".edit-text__wrap").css({
        height: trigger.height
      })

      $(".edit-text__input").css({
        lineHeight: trigger.lineHeight,
        fontWeight: trigger.fontWeight,
        fontStyle: trigger.fontStyle,
        fontSize: trigger.fontSize
      })
        .val(text)
        .focus();
    })

  });

  $(document).on( "keypress", "textarea", function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      $("[data-edit-text-save]").click();
    }
  });

  $(document).on( "click", "[data-edit-text-save]", function(e) {
    var text = $(".edit-text__input").val();
    $(".is-editing").text(text).show();
    $(".edit-text").remove();
  })

  $(document).on( "click", "[data-edit-text-cancel]", function(e) {
    $(".is-editing").show();
    $(".edit-text").remove()
  })

})( jQuery );