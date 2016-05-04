import React from 'react';
import Label from '../Label';

const renderCheckbox = (props) => {
  return (
    <input
      type="checkbox"
      defaultChecked={props.isDefaultChecked}
      checked={props.isChecked}
      required={props.isRequired}
      readOnly={props.isReadOnly}
      disabled={props.isDisabled}
      onInput={props.onInput}
      onChange={props.onChange}
    />
  );
};

const Checkbox = (props) => {
  if (props.label) {
    return (
      <Label className="input-list">
        { renderCheckbox(props) }
        <span className="label display--inline">
          { props.label }
        </span>
      </Label>
    );
  }

  return renderCheckbox(props);
};

Checkbox.propTypes = {
  isDefaultChecked: React.PropTypes.bool,
  isChecked: React.PropTypes.bool,
  isRequired: React.PropTypes.bool,
  isReadOnly: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  onInput: React.PropTypes.func,
  onChange: React.PropTypes.func,
  label: React.PropTypes.string,
};
renderCheckbox.propTypes = Checkbox.propTypes;

export default Checkbox;
