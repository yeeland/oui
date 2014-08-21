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

    data: {
      $tmpl : ''
    },

    bind: function() {
      var $el = $(this.el);
      var $tmpl = $(tmpl);

      // console.log('height: ' + $el.height());
      // console.log('width: ' + $el.width());

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
        // this.methods._show($tmpl);
        var $el = $(this.el);
        var left = 0;
        var top = 0;

        var pos = $el.position();

        console.log(direction);

        if (direction.indexOf('-') === -1) {
          if (direction === 'right') {
            left -= $tmpl.width() + $el.width();
          } else {
            left += $tmpl.width() - $el.width();
          }
          top -= $el.height() / 2;
        }

        left += pos.left;
        top += pos.top;

        $tmpl.css({
          'left': left,
          'top': top
        });
        $tmpl.show();

      }.bind(this));

      $el.on('mouseout', function() {
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
