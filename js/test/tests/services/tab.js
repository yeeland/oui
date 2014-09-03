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

        // Make sure that they are not currently the active items
        expect(activatedNav).to.not.equal($('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]);
        expect(activatedPane).to.not.equal($('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]);

        Tab.show(activatedNav, activatedPane);

        // Ensure that they are now the currently active items
        expect($el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]).to.equal(activatedNav);
        expect($el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]).to.equal(activatedPane);

        $el.remove();
      });

      it('select same active tab and ensure it is still selected', function() {
        var $el = $(require('text!test/templates/tab-attribute.html'));
        $(document.body).append($el);

        // Find the active tab and select it again
        var activatedNav = $el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0];
        var activatedPane = $el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0];

        // Confirm the currently active tab
        expect(activatedNav).to.equal($('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]);
        expect(activatedPane).to.equal($('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]);

        Tab.show(activatedNav);

        expect($el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]).to.equal(activatedNav);
        expect($el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]).to.equal(activatedPane);

        $el.remove();
      });

      it('hide the selected tab & its associated content', function() {
        var $el = $(require('text!test/templates/tab-attribute.html'));
        $(document.body).append($el);

        // Find the active tab and select it again
        var activeNav = $el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0];
        var activePane = $el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0];

        // Confirm the currently active tab
        expect(activeNav).to.equal($('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]);
        expect(activePane).to.equal($('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]);

        Tab._hide(activeNav, activePane);

        expect($el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]).to.not.equal(activeNav);
        expect($el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]).to.not.equal(activePane);

        expect($(activeNav).hasClass('.lego-tabs-nav__item' + ACTIVE_CLASS)).to.not.be.ok();
        expect($(activePane).hasClass('.lego-tabs-pane__item' + ACTIVE_CLASS)).to.not.be.ok();

        $el.remove();
      });

      it('hide an already hidden tab & its associated content to ensure it is intact', function() {
        var $el = $(require('text!test/templates/tab-attribute.html'));
        $(document.body).append($el);

        // Find the active tab and select it again
        var inactiveNav = $el.find('.lego-tabs-nav__item :not(' + ACTIVE_CLASS + ')')[0];
        var inactivePane = $el.find('.lego-tabs-pane__item :not(' + ACTIVE_CLASS + ')')[0];

        // Confirm the currently active tab
        expect(inactiveNav).to.equal($('.lego-tabs-nav__item :not(' + ACTIVE_CLASS + ')')[0]);
        expect(inactivePane).to.equal($('.lego-tabs-pane__item :not(' + ACTIVE_CLASS + ')')[0]);

        Tab._hide(inactiveNav, inactivePane);

        expect($el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]).to.not.equal(inactiveNav);
        expect($el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]).to.not.equal(inactivePane);

        expect($(inactiveNav).hasClass('.lego-tabs-nav__item' + ACTIVE_CLASS)).to.not.be.ok();
        expect($(inactivePane).hasClass('.lego-tabs-pane__item' + ACTIVE_CLASS)).to.not.be.ok();

        $el.remove();
      });
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

        Tab.show(activatedNav, activatedPane);

        // Ensure that they are now the currently active items
        expect($el.find('.lego-tabs-nav__item' + ACTIVE_CLASS)[0]).to.equal(activatedNav);
        expect($el.find('.lego-tabs-pane__item' + ACTIVE_CLASS)[0]).to.equal(activatedPane);

        $el.remove();
      });
    });
  });
});
