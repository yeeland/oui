(function($, window, document) {

  $(document).on( "click", ".edit", function() {
    $trigger = $(this);
    var text = $trigger.text();
    $(".edit-text__input").focus().val(text);
  });

  $(document).on( "click", "[data-edit-text-save]", function() {
    var text = $(".edit-text__input").val();
    $(".edit").text(text);
    $(".pop--over").animate({opacity: 0}, "fast")
  });

  $(document).on( "click", "[data-edit-text-cancel]", function() {
    $(".pop--over").animate({opacity: 0}, "fast")
  });

}(window.jQuery, window, document));
