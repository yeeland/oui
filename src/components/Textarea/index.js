import React from 'react';

/**
 * Generates a `textarea` element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
class Textarea extends React.Component {
  blur() {
    if (this._textarea) {
      this._textarea.blur();
    }
  }

  render() {
    return (
      /* eslint-disable react/jsx-no-bind */
      <textarea
        className="oui-textarea"
        ref={ (c) => { this._textarea = c; } }
        value={ this.props.value }
        defaultValue={ this.props.defaultValue }
        placeholder={ this.props.placeholder }
        required={ this.props.isRequired }
        readOnly={ this.props.isReadOnly }
        disabled={ this.props.isDisabled }
        onInput={ this.props.onInput }
        onChange={ this.props.onChange }
        onBlur={ this.props.onBlur }
        onKeyDown={ this.props.onKeyDown }
        onFocus={ this.props.onFocus }
        data-test-section={ this.props.testSection }
      />
      /* eslint-enable react/jsx-no-bind */
    );
  }
}

Textarea.propTypes = {
  /** The default value of the textarea used on initial render */
  defaultValue: React.PropTypes.string,
  /** Prevents textarea from being modified and appears disabled */
  isDisabled: React.PropTypes.bool,
  /** Prevents textarea from being modified but doesn't appear disabled */
  isReadOnly: React.PropTypes.bool,
  /** Prevents textarea from being submitted without value */
  isRequired: React.PropTypes.bool,
  /**
    Function that fires when the textarea loses focus. It fires regardless of
    whether the value has changed.
  */
  onBlur: React.PropTypes.func,
  /**
    Function that fires when the textarea loses focus after the value
    changes
  */
  onChange: React.PropTypes.func,
  /** Function that fires when the textarea gains focus */
  onFocus: React.PropTypes.func,
  /** Function that fires the the textarea value changes */
  onInput: React.PropTypes.func,
  /** Function that fires when a key is pressed down */
  onKeyDown: React.PropTypes.func,
  /** Textarea placeholder text */
  placeholder: React.PropTypes.string,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Text within the textarea */
  value: React.PropTypes.string,
};

export default Textarea;
