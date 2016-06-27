import React from 'react';
import Label from '../Label';

const renderInput = (props) => {
  return (
    <input
      className="oui-text-input"
      type={ props.type }
      value={ props.value }
      defaultValue={ props.defaultValue }
      placeholder={ props.placeholder }
      required={ props.isRequired }
      readOnly={ props.isReadOnly }
      disabled={ props.isDisabled }
      onInput={ props.onInput }
      onChange={ props.onChange }
      data-test-section={ props.testSection }
    />
  );
};

const Input = (props) => {
  if (props.label) {
    return (
      <Label testSection={ props.testSection + '-label' }>
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
  defaultValue: React.PropTypes.string,
  isDisabled: React.PropTypes.bool,
  isReadOnly: React.PropTypes.bool,
  isRequired: React.PropTypes.bool,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onInput: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  testSection: React.PropTypes.string,
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
};
renderInput.propTypes = Input.propTypes;

export default Input;
