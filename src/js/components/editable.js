function populateInput(pop, $trigger) {
  var text = $trigger.text();
  $(".edit-text__input").focus().val(text);
}

function saveText() {
  var text = $(".edit-text__input").val();
  $(".edit.is-active").text(text);
  $(".pop--over").animate({opacity: 0}, "fast", function(){
    $(".pop--over").remove();
  })
  $(".edit.is-active").removeClass("is-active");
}

(function($, window, document) {

  $(document).bind("change keyup input", '.edit-text__input', function(e) {

      // Wait for keypress before removing disabled.
      if ( $(".edit.is-active").length ) {
        $("[data-edit-text-save]").removeAttr("disabled");

        // If return key is pressed.
        if (e.which == 13) {
          e.preventDefault();
          saveText();
        }
      }

  });

  $(document).on( "click", "[data-edit-text-save]", function() {
    saveText();
  });

  $(document).on( "click", "[data-edit-text-cancel]", function() {
    $(".pop--over").animate({opacity: 0}, "fast", function(){
      $(".pop--over").remove();
    })
    $(".edit.is-active").removeClass("is-active")
  });

}(window.jQuery, window, document));
