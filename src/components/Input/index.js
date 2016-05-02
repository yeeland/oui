import React from 'react';
import Label from '../Label';

const renderInput = (props) => {
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

const Input = (props) => {
  if (props.label) {
    return (
      <Label>
        <div className="label">
          { props.label }
        </div>
        { renderInput(props) }
      </Label>
    );
  }

  return renderInput(props);
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
  label: React.PropTypes.string,
};
renderInput.propTypes = Input.propTypes;

export default Input;
