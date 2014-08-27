/**
 * Tab directive to handle events
 *
 * @author Cheston Lee
 */
define(function() {
  var tabService = require('app/services/tab');

  return {
    isEmpty: true,

    bind: function() {
      $(el).find('[' + tabService.TAB_RELATION + ']').each(function(idx, tab) {
        $(tab).on('click', tabService.show.bind(tabService, tab));
      });
    }
  };
});

