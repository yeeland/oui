/**
 * Vue directive for creating a pop-tip
 *
 * @author Cheston Lee
 */
define('app/directives/poptip',['require','jquery'],function(require) {
  var $ = require('jquery');

  var tmpl = '<div class="lego-pop-tip"></div>';
  var ARROW_CLASS_TEMPLATE = 'lego-pop-tip--arrow-';

  return {

    isEmpty: true,

    bind: function() {
      var $el = $(this.el);
      var $tmpl = $(tmpl);

      var direction = $el.attr('data-dir');
      var content = $el.attr('data-content');
      $tmpl.addClass(ARROW_CLASS_TEMPLATE + direction);
      $tmpl.html(content);

      $tmpl.css({
        'display' : 'none',
        'position' : 'absolute',
        'top' : 0,
        'left' : 0
      });

      $el.on('mouseenter', function() {
        //TODO: Break all of this out, it is gross
        var $el = $(this.el);

        //Place the tip in the DOM to measure it
        $tmpl.css({
          'display' : 'block',
          'visibility' : 'hidden'
        });

        var pos = $el.position();

        //Determine the size of the CSS arrow
        var arrowWidth = parseInt(window.getComputedStyle($tmpl.get(0), ':before').getPropertyValue('width'));
        var arrowHeight = parseInt(window.getComputedStyle($tmpl.get(0), ':before').getPropertyValue('height'));

        // Hack for FF/IE that reports computed values as 'auto' not px values and divide by 2 to get the actual offset
        arrowWidth = (isNaN(arrowWidth) ? '12' : arrowWidth) / 2;
        arrowHeight = (isNaN(arrowHeight) ? '12' : arrowHeight) / 2;

        var left = pos.left;
        var top = pos.top;

        //For non orientation specific directions(right,left) we want to
        if (direction.indexOf('-') === -1) {
          if (direction === 'right') {
            left += ($el.outerWidth(true) + arrowWidth);
          } else {
            left -= ($tmpl.outerWidth(true) + arrowWidth);
          }
          //Align the arrow correctly
          top += (($el.outerHeight(true) / 2) - ($tmpl.innerHeight() / 2));
        } else {

          var parts = direction.split('-');

          if (parts[0] === 'top') {
            top -= ($tmpl.outerHeight(true)) + arrowHeight;
          } else {
            top += $el.outerHeight(true) + arrowHeight;
          }

          switch(parts[1]) {
            case 'right':
              left -= ($tmpl.outerWidth(true) - $el.outerWidth(true));
              break;
            case 'center':
              left += (($el.outerWidth(true) / 2) - ($tmpl.innerWidth() / 2));

              break;
          }

        }

        $tmpl.css({
          'left': left,
          'top': top,
          'visibility' : 'visible'
        });

      }.bind(this));

      $el.on('mouseleave', function() {
        $tmpl.hide();

      }.bind(this));

      $('body').append($tmpl);
    },

    unbind: function() {
      $(this.el).off('mouseenter');
      $(this.el).off('mouseout');

      this.$tmpl.detach();
    },

    methods: {
      // _show: function(tip) {
      //   // this._positionToolTip(tip);
      //   var pos = $(this.el).position();
      //   tip.css({
      //     'left': pos.left,
      //     'top': pos.top
      //   });
      //   tip.show();
      // },

      // _hide: function(tip) {
      //   tip.hide();
      // },

      // _positionToolTip: function(tip) {
      //   var pos = $(this.el).position();
      //   tip.css({
      //     'left': pos.left,
      //     'top': pos.top
      //   });
      // }
    }
  };
});
