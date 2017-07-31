import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  const classes = classNames({
    'flex--none': true,
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });
  return (
    <Label testSection={ props.testSection && props.testSection + '-label' }>
      <div className="flex">
        <input
          data-oui-component={ true }
          type="checkbox"
          defaultChecked={ props.defaultChecked }
          checked={ props.checked }
          className={ classes }
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
  checked: PropTypes.bool,
  /** Boolean for how checkbox renders initially  */
  defaultChecked: PropTypes.bool,
  /** Prevents checkbox from being modified and appears disabled */
  isDisabled: PropTypes.bool,
  /** Text that describes the checkbox */
  label: PropTypes.string,
  /** Function that fires when the checkbox is clicked */
  onChange: PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Checkbox;
