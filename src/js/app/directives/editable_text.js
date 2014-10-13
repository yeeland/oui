/**
 *  Turns any non-form element into a contenteditable
 *  HTML element with a two-way data binding to the key passed in
 *  as an argument. Takes exactly one argument.
 *
 *  Roughly equivalent to (and modelled after) the v-model directive
 *  when applied to form elements.
 *  IMPORTANT: This will not work on form elements! Use v-model instead.
 */
define(function() {

  var selectionHelper = require('app/utils/contenteditable_selection');

  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;
  var attrToChange = 'textContent';

  return {

    _savedSelection: null, // Default Value

    bind: function () {

      var self = this,
        el = self.el;

      // Make the content editable
      $(el).attr('contenteditable', true);
      // Apply LEGO ClassName
      $(el).addClass('editable');

      // On escape, reset to the initial value and deselect (blur)
      self.onEsc = function(e) {
        if (e.keyCode === ESCAPE_KEY) {
          el[attrToChange] = self.initialValue || '';
          self._set();
          el.blur();
        }
      };
      el.addEventListener('keyup', this.onEsc);

      self.onEnter = function(e) {
        if (e.keyCode === ENTER_KEY) {
          e.preventDefault();
          el.blur();
        }
      };
      el.addEventListener('keydown', this.onEnter);

      // On focus, store the initial value so it can be reset on escape
      self.onFocus = function() {
        self.initialValue = el[attrToChange];
      };
      el.addEventListener('focus', this.onFocus);

      self.onInput = function () {
        // if this directive has filters
        // we need to let the vm.$set trigger
        // update() so filters are applied.
        // therefore we have to record cursor position (selection)
        // so that after vm.$set changes the input
        // value we can put the cursor back at where it is
        this._savedSelection = selectionHelper.saveSelection(el);

        self._set();
      };

      el.addEventListener('input', self.onInput);
    },

    _set: function () {
      this.vm.$set(this.key, this.el[attrToChange]);
    },

    update: function (value, init) {
      // sync back inline value if initial data is undefined
      if (init && value === undefined) {
        return this._set();
      }

      this.el[attrToChange] = !_.isString(value) ? '' : value;

      // Since updates are async, we need to reset the position of the cursor after it fires
      // v-model tries to do this with setTimeout(cb, 0) but if there's a filter and you type
      // too fast, there's a race condition where the timeout can fire before
      // update, moving the cursor back to the front. Having this here guarantees the cursor
      // is reset after update.
      // See the comment in self.set for additional context
      if (this._savedSelection) {
        selectionHelper.restoreSelection(this.el, this._savedSelection);
      }
    },

    unbind: function () {
      var el = this.el;
      el.removeEventListener('input', this.onInput);
      el.removeEventListener('keyup', this.onEsc);
      el.removeEventListener('keydown', this.onEnter);
      el.removeEventListener('focus', this.onFocus);
    }
  };
});
