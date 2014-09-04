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

        DropdownService.show(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();

        $el.remove();
      });

      it('hide dropdown from open state', function() {
        var $el = $(require('text!test/templates/dropdown.html'));
        var ddButton = $($el.find('[data-toggle-dropdown]')[0]);

        $(document.body).append($el);

        expect(ddButton.hasClass('shown')).to.not.be.ok();

        DropdownService.show(ddButton);

        expect(ddButton.hasClass('shown')).to.be.ok();

        DropdownService.hide(ddButton);

        expect(ddButton.hasClass('shown')).to.not.be.ok();

        $el.remove();
      });
    });
  });
});
