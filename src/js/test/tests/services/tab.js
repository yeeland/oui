define(function(require) {
  var $ = require('jquery');

  var Tab = require('app/services/tab');
  var ACTIVE_CLASS = '.' + Tab.ACTIVE_CLASS;

  describe('services', function() {
    describe('tab-attribute', function() {

      it('select new active tab and ensure that the nav and pane are active', function() {
        var $el = $(require('text!test/templates/tab-attribute.html'));
        $(document.body).append($el);

        // Default active is the first tab, select the third
        var activatedNav = $el.find('.lego-tabs-nav__item')[2];
        var activatedPane = $el.find('.lego-tabs-pane__item')[2];

        var activeNav = $el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0];
        var activePane = $el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0];

        // Make sure that they are not currently the active items
        expect(activatedNav).to.not.equal(activeNav);
        expect(activatedPane).to.not.equal(activePane);

        Tab.activate(activatedNav, activatedPane);

        // Ensure that they are now the currently active items
        expect($(activatedNav).hasClass(Tab.ACTIVE_CLASS)).to.be.ok();
        expect($(activatedPane).hasClass(Tab.ACTIVE_CLASS)).to.be.ok();

        expect($(activeNav).hasClass(Tab.ACTIVE_CLASS)).to.not.be.ok();
        expect($(activePane).hasClass(Tab.ACTIVE_CLASS)).to.not.be.ok();

        $el.remove();
      });

      it('select same active tab and ensure it is still selected', function() {
        var $el = $(require('text!test/templates/tab-attribute.html'));
        $(document.body).append($el);

        // Find the active tab and select it again
        var activatedNav = $el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0];
        var activatedPane = $el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0];

        // Confirm the currently active tab
        expect($(activatedNav).hasClass(Tab.ACTIVE_CLASS)).to.be.ok();
        expect($(activatedPane).hasClass(Tab.ACTIVE_CLASS)).to.be.ok();

        Tab.activate(activatedNav);

        expect($(activatedNav).hasClass(Tab.ACTIVE_CLASS)).to.be.ok();
        expect($(activatedPane).hasClass(Tab.ACTIVE_CLASS)).to.be.ok();

        $el.remove();
      });

    describe('tab-ordered', function() {
      it('select new active tab and ensure that the nav and pane are active', function() {
        var $el = $(require('text!test/templates/tab-ordered.html'));
        $(document.body).append($el);

        // Default active is the first tab, select the third
        var activatedNav = $el.find('.lego-tabs-nav__item')[2];
        var activatedPane = $el.find('.lego-tabs-pane__item')[2];

        // Make sure that they are not currently the active items
        expect(activatedNav).to.not.equal($('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]);
        expect(activatedPane).to.not.equal($('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]);

        Tab.activate(activatedNav, activatedPane);

        // Ensure that they are now the currently active items
        expect($el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]).to.equal(activatedNav);
        expect($el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]).to.equal(activatedPane);

        $el.remove();
       });
     });
    });
  });
});
