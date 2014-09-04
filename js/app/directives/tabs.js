/**
 * Tab directive to handle finding relationship between tabs & content and
 * activating nav/content elements.
 *
 * Relationships can be made via data attribute('data-tab-realted')
 * or by the order of the nav element and it's assoicated tab content block.
 *
 * Example of data attribute relationship
 *
 * <div v-tabs="tabsContainer2">
 *   <ul>
 *     <li class="tab-active" data-tab-related="two">Tab Two</li>
 *     <li data-tab-related="one">Tab One</li>
 *     <li data-tab-related="three">Tab Three</li>
 *   </ul>
 * </div>
 *
 *  <div class="lego-tab-content" id="tabsContainer2">
 *    <div class="tab-active" data-tab-related="one">One</div>
 *    <div data-tab-related="three">Three</div>
 *    <div data-tab-related="two">Two</div>
 *  </div>
 *
 * Example of order based relationship
 *
 *   <div v-tabs="tabsContainer">
 *    <ul>
 *      <li class="tab-active">Tab One</li>
 *      <li>Tab Two</li>
 *      <li>Tab Three</li>
 *    </ul>
 *  </div>
 *
 *  <div id="tabsContainer">
 *    <div class="tab-active">One</div>
 *    <div>Two</div>
 *    <div>Three</div>
 *  </div>
 *
 * @author Cheston Lee
 */
define(function() {
  var tabService = require('app/services/tab');

  return {
    isEmpty: true,
    bind: function() {
      $(this.el).on('click', function(e) {
        var tab = null;

        var $el = $(this.el);
        var $target = $(e.target);
        var tabContainerId = this.expression;
        var relation = $target.attr(tabService.TAB_RELATION_ATTR);

        if (relation)  {
          tab = $('#' + tabContainerId).children('div[' + tabService.TAB_RELATION_ATTR + '=' + relation + ']')[0];
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

       tabService.activate(e.target, tab);

      }.bind(this));
    }
  };
});

