/**
 * Vue directive for creating a pop-tip
 *
 * @author Cheston Lee
 */
define(function() {

  var tmpl = '<div class="lego-pop-tip"></div>';
  var ARROW_CLASS_TEMPLATE = 'lego-pop-tip--arrow-';
  /**
   * Parse the readable name and translate it into the appropriate lego classname.
   *
   * @param {String} direction data-dir from the tip directive
   * @return {String} The appropriate lego class name to apply to the poptip
   */
  function getArrowDirection (direction) {
    if (!direction) {
      return 'bottom-center';
    }
    // Create array of the direction.
    var arrowParts = direction.split('-');
    var arrowLocation = '';

    // We have to swap the text given in 'direction' so that the arrow class is correct.
    // Testing here to see if we have two values, e.g. 'top-left', if so only change the first.
    if ( arrowParts.length > 1) {
      if (arrowParts[0] === "top") {
        arrowParts[0] = "bottom";
      } else {
        arrowParts[0] = "top";
      }
      // Recombine the directions to create the class.
      arrowLocation = arrowParts.join('-');

    } else {
      switch(direction) {
        case 'right':
          arrowLocation = 'left';
          break;
        case 'left':
          arrowLocation = 'right';
          break;
        case 'bottom':
          arrowLocation = 'top-center';
          break;
        // Fallthrough and default to top
        case 'top':
        default:
          arrowLocation = 'bottom-center';
      }
    }
    return arrowLocation;
  }

  return {

    isEmpty: true,

    data: {
      tip: null
    },
    bind: function() {
      var $el = $(this.el);
      var direction = $el.attr('data-dir');
      var content = $el.attr('data-content');
      var arrowLocation = getArrowDirection(direction);

      this.tip = $(tmpl);
      this.tip.addClass(ARROW_CLASS_TEMPLATE + arrowLocation);
      this.tip.html(content);

      this.tip.css({
        'display' : 'none',
        'position' : 'absolute',
        'top' : 0,
        'left' : 0
      });

      $el.on('mouseenter', function() {
        //TODO: Break all of this out, it is gross
        var $el = $(this.el);

        //Place the this.tip in the DOM to measure it
        this.tip.css({
          'display' : 'block',
          'visibility' : 'hidden'
        });

        var pos = $el.position();

        //Determine the size of the CSS arrow
        var arrowWidth = parseInt(window.getComputedStyle(this.tip.get(0), ':before').getPropertyValue('width'));
        var arrowHeight = parseInt(window.getComputedStyle(this.tip.get(0), ':before').getPropertyValue('height'));

        // Hack for FF/IE that reports computed values as 'auto' not px values and divide by 2 to get the actual offset
        arrowWidth = (isNaN(arrowWidth) ? '12' : arrowWidth) / 2;
        arrowHeight = (isNaN(arrowHeight) ? '12' : arrowHeight) / 2;

        var left = pos.left;
        var top = pos.top;

        //For non orientation specific directions(right,left) we want to
        if (direction.indexOf('-') === -1) {
          switch(direction) {
            case 'right':
              left += ($el.outerWidth(true) + arrowWidth);
              top += (($el.outerHeight(true) / 2) - (this.tip.innerHeight() / 2));
              break;
            case 'left':
              left -= (this.tip.outerWidth(true) + arrowWidth);
              top += (($el.outerHeight(true) / 2) - (this.tip.innerHeight() / 2));
              break;
            case 'top':
              top -= (this.tip.outerHeight(true)) + arrowHeight;
              left += (($el.outerWidth(true) / 2) - (this.tip.innerWidth() / 2));
              break;
            case 'bottom':
              top += $el.outerHeight(true) + arrowHeight;
              left += (($el.outerWidth(true) / 2) - (this.tip.innerWidth() / 2));
              break;
          }
        } else {
          var parts = direction.split('-');

          if (parts[0] === 'top') {
            top -= (this.tip.outerHeight(true)) + arrowHeight;
          } else {
            top += $el.outerHeight(true) + arrowHeight;
          }

          switch(parts[1]) {
            case 'right':
              left -= (this.tip.outerWidth(true) - $el.outerWidth(true));
              break;
            case 'center':
              left += (($el.outerWidth(true) / 2) - (this.tip.innerWidth() / 2));
              break;
          }
        }

        this.tip.css({
          'left': left,
          'top': top,
          'visibility' : 'visible'
        });

      }.bind(this));

      $el.on('mouseleave', function() {
        this.tip.hide();
      }.bind(this));

      $('body').append(this.tip);
    },

    unbind: function() {
      $(this.el).off('mouseenter mouseout');
      this.tip.detach();
    },
  };
});
