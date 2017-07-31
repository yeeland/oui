import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Label from '../Label';

/**
 * Generates a `input` element of type `radio` that is wrapped in a `Label`.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Radio = (props) => {
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
          type="radio"
          name={ props.name }
          defaultChecked={ props.defaultChecked }
          checked={ props.checked }
          className={ classes }
          disabled={ props.isDisabled }
          onChange={ props.onChange }
          data-test-section={ props.testSection }
          style={{ 'marginTop': '0.3em' }}
        />
        <div className={ labelClassNames }>
          { props.label }
        </div>
      </div>
    </Label>
  );
};

Radio.propTypes = {
  /** Boolean to set radio input, for controlled component  */
  checked: PropTypes.bool,
  /** Boolean for how radio input renders initially  */
  defaultChecked: PropTypes.bool,
  /** Prevents radio input from being modified and appears disabled */
  isDisabled: PropTypes.bool,
  /** Text that describes the radio input */
  label: PropTypes.string,
  /**
    String that can be used to identify a set of radio inputs so that only one
    in the set is checked at any given time.
  */
  name: PropTypes.string.isRequired,
  /** Function that fires when the radio input is clicked */
  onChange: PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Radio;
