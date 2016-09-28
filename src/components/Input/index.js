import React from 'react';
import Label from 'components/Label';

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
    let hasSearchIcon = opts.isFilter ? ' oui-text-input--search' : '';
    let classes = 'oui-text-input' + hasSearchIcon;

    return (
      /* eslint-disable react/jsx-no-bind */
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
        data-test-section={ opts.testSection }
      />
      /* eslint-enable */
    );
  }

  render() {
    if (this.props.label) {
      return (
        <Label testSection={ this.props.testSection && this.props.testSection + '-label' }>
          <div className="oui-label">
            { this.props.label }
            { this.props.isOptional && <span className="oui-label__optional">(Optional)</span> }
          </div>
          { this.renderInput(this.props) }
        </Label>
      );
    }

    return this.renderInput(this.props);
  }
}

Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: React.PropTypes.string,
  /** Prevents input from being modified and appears disabled */
  isDisabled: React.PropTypes.bool,
  /** Includes search icon if true */
  isFilter: React.PropTypes.bool,
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
  /** Function that fires when a key is pressed down */
  onKeyDown: React.PropTypes.func,
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
