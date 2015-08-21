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
}
  };
});

import ContentEditableSelection from '../utils/contenteditable_selection';

export default class EditableText {
  constructor() {
    this.selectionHelper = new ContentEditableSelection();

    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.attrToChange = 'textContent';
    this.selector = 'editable_text';
  }

  bind() {
    let $el = $(`[${this.attribute}=${this.selector}]`);

    // Apply LEGO ClassName
    $el.addClass('editable');

    // On escape, reset to the initial value and deselect (blur)
    this.onEsc = (e) => {
      if (e.keyCode === this.ESCAPE_KEY) {
        $el.attr(attrToChange, this.initialValue || '');
        this._set();
        $el.get().blur();
      }
    };
    $el.on('keyup', this.onEsc);

    this.onEnter = (e) => {
      if (e.keyCode === this.ENTER_KEY) {
        e.preventDefault();
        $el.get().blur();
      }
    };
    $el.on('keydown', this.onEnter);

    // On focus, store the initial value so it can be reset on escape
    this.onFocus = () => {
      this.initialValue = $el.attr(attrToChange);
    };
    $el.on('focus', this.onFocus);

    this.onInput = () => {
      this._savedSelection = this.selectionHelper.saveSelection($el.get());

      this._set();
    };

    $el.on('input', this.onInput);
  }

  unbind() {
    let $el = $(`[${this.attribute}=${this.selector}]`);
    $el.removeEventListener('input', this.onInput);
    $el.removeEventListener('keyup', this.onEsc);
    $el.removeEventListener('keydown', this.onEnter);
    $el.removeEventListener('focus', this.onFocus)
  }

  update(value, init) {
    let $el = $(`[${this.attribute}=${this.selector}]`);
    // sync back inline value if initial data is undefined
    if (init && value === undefined) {
      return this._set();
    }

    $el.attr(attrToChange, (!_.isString(value) ? '' : value));

    if (this._savedSelection) {
      this.selectionHelper.restoreSelection($el, this._savedSelection);
    }
  }

  _set() {
    let $el = $(`[${this.attribute}=${this.selector}]`);
    this.vm.$set(this.key, $el.attr(attrToChange));
  }

  static getSelector() {
    return 'editable_text';
  }

  static getFullSelectorString() {
    let selector = this.getSelector();
    return `[${this.attribute}=${selector}]`;
  }
}
