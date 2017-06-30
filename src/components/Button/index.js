import React from 'react';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Button = (props) => {
  const buttonClassNames = classNames({
    'oui-button': true,
    [`oui-button--${props.style}`]: props.style,
    [`oui-button--${props.size}`]: props.size,
    [`oui-button--${props.width}`]: props.width,
    ['is-active']: props.isActive,
  });
  return (
    <button
      className={ buttonClassNames }
      disabled={ props.isDisabled ? 'disabled' : false }
      type={ props.isSubmit ? 'submit' : 'button' }
      onClick={ props.onClick }
      data-track-id={ props.testSection }
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
  children: React.PropTypes.node.isRequired,
  /** Render button with active state */
  isActive: React.PropTypes.bool,
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
    'underline',
    'unstyled',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Various height and width options */
  width: React.PropTypes.oneOf([
    'default',
    'full',
  ]),
};

Button.defaultProps = {
  isSubmit: false,
  width: 'default',
};

Button.displayName = 'Button';

export default Button;
