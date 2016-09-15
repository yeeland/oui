import React from 'react';

/**
 * Wraps text or HTML in a `label` element. Often used to label inputs.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Label = (props) => {
  let classes = null;
  let labelEl = null;

  // Optional/Required additional span label
  if (props.isRequired || props.isOptional) {
    let labelClass = null;
    let labelText = null;

    if (props.isRequired) {
      labelClass = 'label--required';
    } else if (props.isOptional) {
      labelClass = 'label__optional';
      labelText = '(Optional)';
    }
    labelEl = <span className={ labelClass }>{ labelText }</span>;
  }

  if (typeof props.children === 'string') {
    classes = 'oui-label';
  }

  return (
    <label
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
      { labelEl }
    </label>
  );
};

Label.propTypes = {
  /** What the label describes */
  children: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]),
  /** Includes optional label if true */
  isOptional: React.PropTypes.bool,
  /** Includes required asterisk label if true */
  isRequired: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Label;
