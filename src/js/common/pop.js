function ouiShowPop(trigger, pop, ARROW_SIZE) { // eslint-disable-line no-unused-vars

  var ANIMATE_DISTANCE = 3;

  // Get the type of popover.
  var popType = trigger.dataAttrs[0].ouiPopType;

  // Location of pop. Unless specified Positon 1 (top/center) is the default.
  var location = 1; // Position 1.
  if (trigger.dataAttrs[0].ouiPopLocation !== undefined) {
    location = trigger.dataAttrs[0].ouiPopLocation;
  }

  // Amount scrolled.
  var scrolled = jQuery(document).scrollTop();

  // Show at bottom if not enough room.
  if (trigger.top - pop.outerHeight < scrolled) {
    location = 7; // Position 7
  }

  // This handles the positioning/showing of the different types of pops: tips, overs.
  // Locations correspond to position that the 'pop' element should show up relative to the trigger.

  //    0    1    2
  //    -----------
  // 11 |         | 3
  // 10 | trigger | 4
  //  9 |         | 5
  //    -----------
  //    8    7    6

  var locations = [
    { // Position 0
      top: trigger.top - pop.outerHeight - ARROW_SIZE,
      left: trigger.left,
      arrow: 'bottom-left',
    },
    { // Position 1
      top: trigger.top - pop.outerHeight - ARROW_SIZE,
      left: trigger.left + trigger.outerWidth / 2 - pop.outerWidth / 2,
      arrow: 'bottom-center',
    },
    { // Position 2
      top: trigger.top - pop.outerHeight - ARROW_SIZE,
      left: trigger.left - pop.outerWidth + trigger.outerWidth,
      arrow: 'bottom-right',
    },
    { // Position 3
      top: trigger.top,
      left: trigger.right + ARROW_SIZE,
      arrow: 'left-top',
    },
    { // Position 4
      top: trigger.top + trigger.outerHeight / 2 - pop.outerHeight / 2,
      left: trigger.right + ARROW_SIZE,
      arrow: 'left-center',
    },
    { // Position 5
      top: trigger.bottom - pop.outerHeight,
      left: trigger.right + ARROW_SIZE,
      arrow: 'left-bottom',
    },
    { // Position 6
      top: trigger.top + trigger.outerHeight + ARROW_SIZE,
      left: trigger.left - pop.outerWidth + trigger.outerWidth,
      arrow: 'top-right',
    },
    { // Position 7
      top: trigger.top + trigger.outerHeight + ARROW_SIZE,
      left: trigger.left + trigger.outerWidth / 2 - pop.outerWidth / 2,
      arrow: 'top-center',
    },
    { // Position 8
      top: trigger.top + trigger.outerHeight + ARROW_SIZE,
      left: trigger.left,
      arrow: 'top-left',
    },
    { // Position 9
      top: trigger.bottom - pop.outerHeight,
      left: trigger.left - pop.outerWidth - ARROW_SIZE,
      arrow: 'right-bottom',
    },
    { // Position 10
      top: trigger.top + trigger.outerHeight / 2 - pop.outerHeight / 2,
      left: trigger.left - pop.outerWidth - ARROW_SIZE,
      arrow: 'right-center',
    },
    { // Position 11
      top: trigger.top,
      left: trigger.left - pop.outerWidth - ARROW_SIZE,
      arrow: 'right-top',
    },
  ];

  // Position the `pop` element, add its arrow, and fade in.
  jQuery(pop.element).css({
    display: 'block',
    top: locations[location].top + ANIMATE_DISTANCE,
    left: locations[location].left,
  })
  .addClass('#{OUI_JS_NAMESPACE}' + popType + '--arrow-' + locations[location].arrow)
  .animate({ opacity: 1, top: locations[location].top }, 'fast');
}
