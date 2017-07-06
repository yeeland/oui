import React from 'react';
import Label from '../Label';
import classnames from 'classnames';
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

  renderInput({
    isFilter,
    hasError,
    type,
    value,
    defaultValue,
    placeholder,
    isRequired,
    isReadOnly,
    isDisabled,
    onInput,
    onChange,
    onBlur,
    onKeyDown,
    onFocus,
    min,
    max,
    testSection,
    focus,
    isDropdown }) {
    let classes = classnames('oui-text-input', {'oui-text-input--search': isFilter}, {'oui-form-bad-news': hasError});

    return (
      /* eslint-disable react/jsx-no-bind */
      <div>
        <input
          className={ classes }
          ref={ (c) => { this._input = c; } }
          type={ type }
          value={ value }
          defaultValue={ defaultValue }
          placeholder={ placeholder }
          required={ isRequired }
          readOnly={ isReadOnly }
          disabled={ isDisabled }
          onInput={ onInput }
          onChange={ onChange }
          onBlur={ onBlur }
          onKeyDown={ onKeyDown }
          onFocus={ onFocus }
          min={ min }
          max={ max }
          data-test-section={ testSection }
          autoFocus={ focus }
        />
        { isDropdown && <span className="oui-arrow-inline--down" /> }
      </div>
      /* eslint-enable */
    );
  }

  render() {
    if (this.props.label) {
      return (
        <div className={ classnames({'oui-form-bad-news': this.props.hasError}) }>
          <Label testSection={ this.props.testSection && this.props.testSection + '-label' }>
            <div className="oui-label">
              { this.props.label }
              { this.props.isOptional && <span className="oui-label__optional">(Optional)</span> }
            </div>
            { this.renderInput(this.props) }
          </Label>
        </div>
      );
    }

    return this.renderInput(this.props);
  }
}

Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: PropTypes.string,
    /** Includes search icon if true */
  hasError: PropTypes.bool,
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
