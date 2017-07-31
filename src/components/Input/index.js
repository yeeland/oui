import React from 'react';
import Label from '../Label';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Generates an `input` element (optionally wrapped in a label) and accepts
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

class Input extends React.Component {

  blur() {
    if (this._input) {
      this._input.blur();
    }
  }

  renderInput(opts) {
    let noteLabel = null;
    if (opts.note) {
      noteLabel = <div className="oui-form-note">{ opts.note }</div>;
    }

    let wrapperClasses = classNames({
      'oui-form-bad-news': opts.displayError,
      'highlight-react--oui': localStorage.getItem('show_ouireact') == 'true',
    });

    let classes = classNames({
      'oui-text-input': true,
      'oui-text-input--search': opts.isFilter,
    });

    return (
      /* eslint-disable react/jsx-no-bind */
      <div data-oui-component={ true } className={ wrapperClasses }>
        <Label
          displayError={ opts.displayError }
          isRequired={ opts.isRequired }
          isOptional={ opts.isOptional }>
          { opts.label }
        </Label>
        <input
          className={ classes }
          ref={ (c) => { this._input = c; } }
          type={ opts.type }
          value={ opts.value }
          defaultValue={ opts.defaultValue }
          placeholder={ opts.placeholder }
          required={ opts.isRequired }
          readOnly={ opts.isReadOnly }
          disabled={ opts.isDisabled }
          onInput={ opts.onInput }
          onChange={ opts.onChange }
          onBlur={ opts.onBlur }
          onKeyDown={ opts.onKeyDown }
          onFocus={ opts.onFocus }
          min={ opts.min }
          max={ opts.max }
          data-test-section={ opts.testSection }
        />
        { noteLabel }
      </div>
      /* eslint-enable */
    );
  }

  render() {
    return this.renderInput(this.props);
  }
}

Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: PropTypes.string,
  /** Toggle error state styles  */
  displayError: PropTypes.bool,
  /** Prevents input from being modified and appears disabled */
  isDisabled: PropTypes.bool,
  /** Includes error if true */
  isFilter: PropTypes.bool,
  /** Adds an optional label if there is a label provided
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isOptional: function verifyIsOptionalProp(props) {
    if (props.isOptional && !props.label) {
      return new Error('Must include a value for the label prop to use the isOptional prop');
    }
    return null;
  },
  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly: PropTypes.bool,
  /** Prevents input from being submitted without value */
  isRequired: PropTypes.bool,
  /** Text that describes the input */
  label: PropTypes.string,
  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max: PropTypes.number,
  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min: PropTypes.number,
  /** Append note near form input. */
  note: PropTypes.string,
  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
  */
  onBlur: PropTypes.func,
  /** Function that fires when the input loses focus after the value changes */
  onChange: PropTypes.func,
  /** Function that fires when the input gains focus */
  onFocus: PropTypes.func,
  /** Function that fires on keypress */
  onInput: PropTypes.func,
  /** Function that fires when a key is pressed down */
  onKeyDown: PropTypes.func,
  /** Input placeholder text */
  placeholder: PropTypes.string,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Supported input types */
  type: PropTypes.oneOf([
    'text',
    'password',
    'date',
    'number',
    'email',
    'url',
    'search',
    'tel',
  ]).isRequired,
  /** Text within the input */
  value: PropTypes.string,
};

export default Input;
