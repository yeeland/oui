import React from 'react';

const Button = ({ ariaLabel, children, isDisabled, isSubmit, size, style }) => {
  let buttonStyleClass = style ? 'button--' + style : '';
  let buttonSizeClass = size ? 'button--' + size : '';

  return (
    <button className={'button ' + buttonStyleClass + ' ' + buttonSizeClass }
            disabled={ isDisabled ? 'disabled' : false }
            type={ isSubmit ? 'submit' : 'button' }
            aria-label={ ariaLabel }>
      { children }
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