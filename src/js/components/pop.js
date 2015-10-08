(function($, window, document) {

  // This handles the positioning/showing of the different types of pops: tips, overs.
  // Locations correspond to position that the 'pop' element should show up relative to the trigger.

  //    1    2    3
  //    -----------
  // 12 |         | 4
  // 11 | trigger | 5
  // 10 |         | 6
  //    -----------
  //    9    8    7

  var ARROW_SIZE = 7;

  $(document).on({
    mouseenter: function () {

      // Get the properties of the trigger.
      var trigger = getProps( $(this) );

      // Get the type. This is required.
      var popType = trigger.dataAttrs[0].popType;

      // Insert the type of pop.
      $("body").append("<div class='pop pop--" + popType + "'>");

      // Location of pop. Unless specified Positon 2 (top/center) is the default.
      var location = 1; // Corresponds to Position 2.
      if (trigger.dataAttrs[0].location) {
        location = trigger.dataAttrs[0].location - 1; // Subtract 1 so the item in array is correct.
      }

      // If pop-text attr exists add it into the `pop` element.
      if (trigger.dataAttrs[0].popText) {
        $(".pop").text(trigger.dataAttrs[0].popText);
      }

      // Now get properities (heigh/width/etc) of the `pop` element.
      var pop = getProps( $(".pop") );

      var locations = [
        { // Position 1
          top: trigger.top - pop.height - ARROW_SIZE,
          left: trigger.left,
          arrow: "bottom-left"
        },
        { // Position 2
          top: trigger.top - pop.height - ARROW_SIZE,
          left: trigger.left + trigger.width / 2 - pop.width / 2,
          arrow: "bottom-center"
        },
        { // Position 3
          top: trigger.top - pop.height - ARROW_SIZE,
          left: trigger.left - pop.width + trigger.width,
          arrow: "bottom-right"
        },
        { // Position 4
          top: trigger.top + trigger.height / 2 - pop.height / 2,
          left: trigger.left + trigger.width + ARROW_SIZE,
          arrow: "left"
        },
        { // Position 5
          top: trigger.top + trigger.height + ARROW_SIZE,
          left: trigger.left - pop.width + trigger.width,
          arrow: "top-right"
        },
        { // Position 6
          top: trigger.top + trigger.height + ARROW_SIZE,
          left: trigger.left + trigger.width / 2 - pop.width / 2,
          arrow: "top-center"
        },
        { // Position 7
          top: trigger.top + trigger.height + ARROW_SIZE,
          left: trigger.left,
          arrow: "top-left"
        },
        { // Position 8
          top: trigger.top + trigger.height / 2 - pop.height / 2,
          left: trigger.left - pop.width - ARROW_SIZE,
          arrow: "right"
        }
      ]

      // Position the `pop` element, add its arrow, and fade in.
      $(".pop").css({
        top: locations[location].top,
        left: locations[location].left
      })
        .addClass("pop--" + popType + "--arrow-" + locations[location].arrow)
        .fadeIn("fast");

    },
    mouseleave: function () {

      // After leaving trigger hover destroy the `pop` element.
      $(".pop").remove();
    }
  }, "[data-pop-type]");

}(window.jQuery, window, document));
