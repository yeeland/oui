import React from 'react';

const Input = (props) => {
  return (
    <input
      className="text-input"
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      required={props.isRequired}
      readOnly={props.isReadOnly}
      disabled={props.isDisabled}
      onInput={props.onInput}
      onChange={props.onChange}
    />
  );
};

Input.propTypes = {
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
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  isRequired: React.PropTypes.bool,
  isReadOnly: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  onInput: React.PropTypes.func,
  onChange: React.PropTypes.func,
};

export default Input;
