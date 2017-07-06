import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wraps text or HTML in a `label` element. Often used to label inputs.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Label = (props) => {
  let classes = null;
  let fieldLabel = null;

  if (props.isRequired) {
    fieldLabel = <span className="oui-label--required"></span>;
  } else if (props.isOptional) {
    fieldLabel = <span className="oui-label__optional">(Optional)</span>;
  }

  if (typeof props.children === 'string') {
    classes = 'oui-label';
  }

  return (
    <label
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
      { fieldLabel }
    </label>
  );
};

Label.propTypes = {
  /** What the label describes */
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  /** Includes optional label if true */
  isOptional: PropTypes.bool,
  /** Includes required asterisk label if true */
  isRequired: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Label;
