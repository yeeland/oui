import React from 'react';
import Label from '../Label';

/**
 * Generates an `input` element (optionally wrapped in a label) and accepts
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Input = (props) => {
  let renderInput = (opts) => {
    let hasSearchIcon = opts.isFilter ? ' oui-text-input--search' : '';
    let classes = 'oui-text-input' + hasSearchIcon;

    return (
      <input
        className={ classes }
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
        onFocus={ opts.onFocus }
        data-test-section={ opts.testSection }
      />
    );
  };

  if (props.label) {
    return (
      <Label testSection={ props.testSection + '-label' }>
        <div className="oui-label">
          { props.label }
        </div>
        { renderInput(props) }
      </Label>
    );
  }

  return renderInput(props);
};

Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: React.PropTypes.string,
  /** Prevents input from being modified and appears disabled */
  isDisabled: React.PropTypes.bool,
  /** Includes search icon if true */
  isFilter: React.PropTypes.bool,
  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly: React.PropTypes.bool,
  /** Prevents input from being submitted without value */
  isRequired: React.PropTypes.bool,
  /** Text that describes the input */
  label: React.PropTypes.string,
  /**
    Function that fires when the input loses focus. It fires regardless of
    whether the value has changed.
  */
  onBlur: React.PropTypes.func,
  /** Function that fires when the input loses focus after the value changes */
  onChange: React.PropTypes.func,
  /** Function that fires when the input gains focus */
  onFocus: React.PropTypes.func,
  /** Function that fires on keypress */
  onInput: React.PropTypes.func,
  /** Input placeholder text */
  placeholder: React.PropTypes.string,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Supported input types */
  type: React.PropTypes.oneOf([
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
  value: React.PropTypes.string,
};

export default Input;
