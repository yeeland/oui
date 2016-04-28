import React from 'react';

const Button = (props) => {
  let buttonStyleClass = props.style ? 'button--' + props.style : '';
  let buttonSizeClass = props.size ? 'button--' + props.size : '';

  return (
    <button
      className={'button ' + buttonStyleClass + ' ' + buttonSizeClass }
      disabled={ props.isDisabled ? 'disabled' : false }
      type={ props.isSubmit ? 'submit' : 'button' }
      aria-label={ props.ariaLabel }>
      { props.children }
    </button>
  );
};

Button.propTypes = {
  ariaLabel: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  isDisabled: React.PropTypes.bool,
  isSubmit: React.PropTypes.bool,
  size: React.PropTypes.oneOf([
    'small',
    'large',
    'narrow',
    'tight',
    'full',
  ]),
  style: React.PropTypes.oneOf([
    'highlight',
    'danger',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
  ]),
};

export default Button;
