import React from 'react';

/**
 * Wraps text or HTML in a `label` element. Often used to label inputs.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Label = (props) => {
  let classes = null;
  if (typeof props.children === 'string') {
    classes = 'oui-label';
  }

  return (
    <label
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </label>
  );
};

Label.propTypes = {
  /** What the label describes */
  children: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Label;
