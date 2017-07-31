import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
    const classes = classNames({
      'oui-textarea': true,
      'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
    });

    return (
      /* eslint-disable react/jsx-no-bind */
      <textarea
        data-oui-component={ true }
        className={ classes }
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
  defaultValue: PropTypes.string,
  /** Prevents textarea from being modified and appears disabled */
  isDisabled: PropTypes.bool,
  /** Prevents textarea from being modified but doesn't appear disabled */
  isReadOnly: PropTypes.bool,
  /** Prevents textarea from being submitted without value */
  isRequired: PropTypes.bool,
  /**
    Function that fires when the textarea loses focus. It fires regardless of
    whether the value has changed.
  */
  onBlur: PropTypes.func,
  /**
    Function that fires when the textarea loses focus after the value
    changes
  */
  onChange: PropTypes.func,
  /** Function that fires when the textarea gains focus */
  onFocus: PropTypes.func,
  /** Function that fires the the textarea value changes */
  onInput: PropTypes.func,
  /** Function that fires when a key is pressed down */
  onKeyDown: PropTypes.func,
  /** Textarea placeholder text */
  placeholder: PropTypes.string,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Text within the textarea */
  value: PropTypes.string,
};

export default Textarea;
