import React from 'react';
import classNames from 'classnames';

/**
 * Buttons come in a wide array of styles and allow the user to perform an
 * action.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Button = (props) => {
  const btnClass = classNames({
    'oui-button': true,
    [`oui-button--${props.style}`]: props.style,
    [`oui-button--${props.size}`]: props.size,
    'link': props.hasLinkColor,
  });

  return (
    <button
      className={ btnClass }
      disabled={ props.isDisabled ? 'disabled' : false }
      type={ props.isSubmit ? 'submit' : 'button' }
      onClick={ props.onClick }
      hasLinkColor={ props.hasLinkColor }
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
  /** Make text color blue if true */
  hasLinkColor: React.PropTypes.bool,
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
    'link',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Button;
