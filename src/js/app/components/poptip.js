/**
 * Controller for creating a pop-tip
 *
 * @author Cheston Lee
 */
import BaseController from './base';

const NAME = 'poptip';
const TEMPLATE = '<div class="lego-pop-tip"></div>';
const ARROW_CLASS_TEMPLATE = 'lego-pop-tip--arrow-';


export default class Poptip extends BaseController {
  constructor(elem) {
    super(elem);
    this.tip = null;
  }

  bind() {
    let direction = this.$elem.attr('data-dir');
    let content = this.$elem.attr('data-content');
    let arrowLocation = this._getArrowDirection(direction);

    this.tip = $(TEMPLATE);
    this.tip.addClass(ARROW_CLASS_TEMPLATE + arrowLocation);
    this.tip.html(content);

    this.tip.css({
      'display' : 'none',
      'position' : 'absolute',
      'top' : 0,
      'left' : 0
    });

    this.$elem.on('mouseenter', () => {
      //Place the this.tip in the DOM to measure it
      this.tip.css({
        'display' : 'block',
        'visibility' : 'hidden'
      });

      let offset = this.$elem.offset();

      //Determine the size of the CSS arrow
      let arrowWidth = parseInt(window.getComputedStyle(this.tip.get(0), ':before').getPropertyValue('width'));
      let arrowHeight = parseInt(window.getComputedStyle(this.tip.get(0), ':before').getPropertyValue('height'));

      // Hack for FF/IE that reports computed values as 'auto' not px values and divide by 2 to get the actual offset
      arrowWidth = (isNaN(arrowWidth) ? '12' : arrowWidth) / 2;
      arrowHeight = (isNaN(arrowHeight) ? '12' : arrowHeight) / 2;

      let left = offset.left;
      let top = offset.top;

      //For non orientation specific directions(right,left) we want to
      if (direction.indexOf('-') === -1) {
        switch(direction) {
          case 'right':
            left += (this.$elem.outerWidth(true) + arrowWidth);
            top += ((this.$elem.outerHeight(true) / 2) - (this.tip.innerHeight() / 2));
            break;
          case 'left':
            left -= (this.tip.outerWidth(true) + arrowWidth);
            top += ((this.$elem.outerHeight(true) / 2) - (this.tip.innerHeight() / 2));
            break;
          case 'top':
            top -= (this.tip.outerHeight(true)) + arrowHeight;
            left += ((this.$elem.outerWidth(true) / 2) - (this.tip.innerWidth() / 2));
            break;
          case 'bottom':
            top += this.$elem.outerHeight(true) + arrowHeight;
            left += ((this.$elem.outerWidth(true) / 2) - (this.tip.innerWidth() / 2));
            break;
        }
      } else {
        let parts = direction.split('-');

        if (parts[0] === 'top') {
          top -= (this.tip.outerHeight(true)) + arrowHeight;
        } else {
          top += this.$elem.outerHeight(true) + arrowHeight;
        }

        switch(parts[1]) {
          case 'right':
            left -= (this.tip.outerWidth(true) - this.$elem.outerWidth(true));
            break;
          case 'center':
            left += ((this.$elem.outerWidth(true) / 2) - (this.tip.innerWidth() / 2));
            break;
        }
      }

      this.tip.css({
        'left': left,
        'top': top,
        'visibility' : 'visible'
      });
    });

    this.$elem.on('mouseleave', () => {
      this.tip.hide();
    });

    $('body').append(this.tip);
  }

  unbind() {
    this.$elem.off('mouseenter mouseout');
    this.tip.detach();
  }

  static getFullSelectorString() {
    return `[${this.getComponentAttribute()}=${NAME}]`;
  }

  /**
   * Parse the readable name and translate it into the appropriate lego classname.
   *
   * @param {String} direction data-dir from the tip directive
   * @return {String} The appropriate lego class name to apply to the poptip
   */
  _getArrowDirection(direction) {
    if (!direction) {
      return 'bottom-center';
    }
    // Create array of the direction.
    let arrowParts = direction.split('-');
    let arrowLocation = '';

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
}
