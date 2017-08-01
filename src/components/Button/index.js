import React from 'react';
import PropTypes from 'prop-types';
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
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });

  return (
    <button
      data-oui-component={ true }
      className={ buttonClassNames }
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
  ariaLabel: PropTypes.string,
  /** Text within the button */
  children: PropTypes.node.isRequired,
  /** Render button with active state */
  isActive: PropTypes.bool,
  /** Prevent users from interacting with the button */
  isDisabled: PropTypes.bool,
  /** Make the button act as a submit button */
  isSubmit: PropTypes.bool,
  /** Function that fires when the button is clicked on */
  onClick: PropTypes.func,
  /** Various height and width options */
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'large',
    'narrow',
    'tight',
  ]),
  /** Various color options */
  style: PropTypes.oneOf([
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
  testSection: PropTypes.string,
  /** Various height and width options */
  width: PropTypes.oneOf([
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
