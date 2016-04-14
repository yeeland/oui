(function($) {

  $(document).on('click', '[data-oui-tabs-nav-item]', function(e) {

    e.preventDefault();

    var TABS_NAV_ITEM = '[data-oui-tabs-nav-item]';
    var TABS_PANE_ITEM = '[data-oui-tabs-panes-item]';
    var ACTIVE_CLASS = 'is-active';

    var $parent = $(this).closest('[data-oui-tabs]');
    var index = $parent.find(TABS_NAV_ITEM).index(this);

    // Hide/show clicked tab.
    $(TABS_NAV_ITEM).removeClass(ACTIVE_CLASS);
    $(this).addClass(ACTIVE_CLASS);

    // Hide/show corresponding content pane.
    var $panes = $parent.find('[data-oui-tabs-pane]');
    $panes.find(TABS_PANE_ITEM).removeClass(ACTIVE_CLASS);
    $panes.find(TABS_PANE_ITEM).eq(index).addClass(ACTIVE_CLASS);
  });

})(jQuery);
