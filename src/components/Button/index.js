import React from 'react';

/**
 * Buttons come in a wide array of styles and allow the user to perform an
 * action.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Button = (props) => {
  let buttonStyleClass = props.style ? 'oui-button--' + props.style : '';
  let buttonSizeClass = props.size ? 'oui-button--' + props.size : '';

  return (
    <button
      className={ 'oui-button ' + buttonStyleClass + ' ' + buttonSizeClass }
      disabled={ props.isDisabled ? 'disabled' : false }
      type={ props.isSubmit ? 'submit' : 'button' }
      onClick={ props.onClick }
      data-test-section={ props.testSection }
      aria-label={ props.ariaLabel }>
      { props.children }
    </button>
  );
};

Button.propTypes = {
  /** Describes buttons that have an icon but no text */
  ariaLabel: React.PropTypes.string,
  /** Text within the button */
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
  /** Prevent users from interacting with the button */
  isDisabled: React.PropTypes.bool,
  /** Make the button act as a submit button */
  isSubmit: React.PropTypes.bool,
  /** Function that fires when the button is clicked on */
  onClick: React.PropTypes.func,
  /** Various height and width options */
  size: React.PropTypes.oneOf([
    'tiny',
    'small',
    'large',
    'narrow',
    'tight',
    'full',
  ]),
  /** Various color options */
  style: React.PropTypes.oneOf([
    'highlight',
    'danger',
    'danger-outline',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Button;
