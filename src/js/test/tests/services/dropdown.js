define(function(require) {
  var $ = require('jquery');

  var DropdownService = require('app/services/dropdown');

  describe('services', function() {
    describe('dropdown', function() {
      it('show dropdown from closed state', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        DropdownService.show(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();
        expect(ddButton.data().eventNS).to.be.ok();

        $el.remove();
      });

      it('hide dropdown from open state', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        DropdownService.show(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();
        expect(ddButton.data().eventNS).to.be.ok();

        DropdownService.hide(ddButton);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.not.be.ok();

        $el.remove();
      });

      it('show dropdown and close from esc keyup', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        DropdownService.show(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();
        expect(ddButton.data().eventNS).to.be.ok();

        var ns = ddButton.data().eventNS;
        $(document.body).trigger($.Event('keyup' + ns, { keyCode : 27}));

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.not.be.ok();

        $el.remove();
      });

      it('show dropdown and close from click outside the DD', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        DropdownService.show(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();
        expect(ddButton.data().eventNS).to.be.ok();

        var ns = ddButton.data().eventNS;
        $(document.body).trigger('click' + ns);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.not.be.ok();

        $el.remove();
      });

      it('hide shown class from dropdown and remove data', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        DropdownService.hide(ddButton);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        $el.remove();
      });

      it('toggle shown class from dropdown on and then off', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.be(undefined);

        DropdownService.toggle(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();
        expect(ddButton.data().eventNS).to.be.ok();

        DropdownService.toggle(ddButton);

        expect(ddButton.hasClass('shown')).to.not.be.ok();
        expect(ddButton.data().eventNS).to.not.be.ok();

        $el.remove();
      });
    });
  });
});
