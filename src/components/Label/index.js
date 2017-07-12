import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Wraps text or HTML in a `label` element. Often used to label inputs.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Label = ({ isRequired, isOptional, displayError, children, testSection }) => {
  const labelClassNames = classNames({
    'oui-form-bad-news': displayError,
  });

  let fieldLabel = null;
  if (isRequired) {
    fieldLabel = <span className="oui-label--required"></span>;
  } else if (isOptional) {
    fieldLabel = <span className="oui-label__optional">(Optional)</span>;
  }

  return (
    <label
      className={ labelClassNames }
      data-test-section={ testSection }>
      <span className="oui-label">{ children }
        { fieldLabel }
      </span>
    </label>
  );
};

Label.propTypes = {
  /** What the label describes */
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  /** Show error state */
  displayError: PropTypes.bool,
  /** Includes optional label if true */
  isOptional: PropTypes.bool,
  /** Includes required asterisk label if true */
  isRequired: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Label;
