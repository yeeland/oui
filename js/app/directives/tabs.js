/**
 * Tab directive to handle events
 *
 * @author Cheston Lee
 */
define(function() {
  var tabService = require('app/services/tab');
  var TAB_RELATION_ATTR = 'data-tab-related';

  return {
    isEmpty: true,
    bind: function() {
      $(this.el).on('click', function(e) {
        var tab = null;

        var $el = $(this.el);
        var $target = $(e.target);
        var tabContainerId = this.expression;
        var relation = $target.attr(tabService.TAB_RELATION);

        if (relation)  {
          tab = $('#' + tabContainerId).children('div[' + TAB_RELATION_ATTR + '=' + relation + ']')[0];
        } else {
          //Determine the target's position in the nav list in order to 'show'
          //the proper tab.
          var lis = Array.prototype.slice.call($el.find('li'), this);
          var idx = lis.indexOf(e.target);

          // We figured out which nav element number this was, now find the matching tab
          if (idx !== -1) {
            tab = $('#' + tabContainerId).find('div')[idx];
          }
       }

       tabService.show(e.target, tab);

      }.bind(this));
    }
  };
});

