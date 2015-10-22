jQuery.noConflict();

(function($) {

  $(document).on( "click", ".tabs-nav__item", function(e) {

    e.preventDefault();

    var TABS_NAV_ITEM = ".tabs-nav__item";
    var TABS_PANE_ITEM = ".tabs-pane__item";
    var ACTIVE_CLASS = "is-active";

    var $parent = $(this).closest(".tabs");
    var index = $parent.find(TABS_NAV_ITEM).index(this);

    // Hide/show clicked tab.
    $(TABS_NAV_ITEM).removeClass(ACTIVE_CLASS)
    $(this).addClass(ACTIVE_CLASS);

    // Hide/show corresponding content pane.
    var $panes =  $parent.find(".tabs-pane");
    $panes.find(TABS_PANE_ITEM).removeClass(ACTIVE_CLASS);
    $panes.find(TABS_PANE_ITEM).eq(index).addClass(ACTIVE_CLASS);
  })

})( jQuery );
