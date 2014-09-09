define(function() {

   var ACTIVE_ACCORDION_CLASS = 'accordion__item--active';

  function activate(el, target) {
    var $el = $(el);
    var $target = $(target);

    var contentPane = $target.parent('.accordion__item');
    var currentActive = $el.find('.' + ACTIVE_ACCORDION_CLASS);
    var contentHeight = currentActive.outerHeight();

    contentPane.animate({height: contentHeight}, {duration: 200, queue: false});
    currentActive.animate({height: $target.outerHeight()}, {duration: 200, queue: false});

    if (currentActive.length > 0) {
      currentActive.removeClass(ACTIVE_ACCORDION_CLASS);
    }

    $target.parent().addClass(ACTIVE_ACCORDION_CLASS);
  }

  return {
    activate: activate
  };
});
