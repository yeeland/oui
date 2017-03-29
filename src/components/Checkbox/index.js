import classNames from 'classnames';
import React from 'react';

import Label from '../Label';

/**
 * Generates a `checkbox` element wrapped in a Label
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Checkbox = (props) => {
  const labelClassNames = classNames({
    'flush--bottom': true,
    'push--left': true,
    'weight--normal': true,
    'cursor--pointer': true,
    'oui-label--disabled': props.isDisabled,
  });
  return (
    <Label testSection={ props.testSection && props.testSection + '-label' }>
      <div className="flex">
        <input
          type="checkbox"
          defaultChecked={ props.defaultChecked }
          checked={ props.checked }
          className="flex--none"
          disabled={ props.isDisabled }
          onChange={ props.onChange }
          data-test-section={ props.testSection }
          style={{ 'marginTop': '0.35em' }}
        />
        <div className={ labelClassNames }>
          { props.label }
        </div>
      </div>
    </Label>
  );
};

Checkbox.propTypes = {
  /** Boolean to set checkbox, for controlled component  */
  checked: React.PropTypes.bool,
  /** Boolean for how checkbox renders initially  */
  defaultChecked: React.PropTypes.bool,
  /** Prevents checkbox from being modified and appears disabled */
  isDisabled: React.PropTypes.bool,
  /** Text that describes the checkbox */
  label: React.PropTypes.string,
  /** Function that fires when the checkbox is clicked */
  onChange: React.PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Checkbox;
