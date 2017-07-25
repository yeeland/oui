import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowsInline = (props) => (
  <span
    data-oui-component={ true }
    className={ 'oui-arrow-inline--' + props.direction }
    aria-hidden="true"
    data-test-section={ props.testSection }>
  </span>
);

ArrowsInline.propTypes = {
  /** Direction the arrow points */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default ArrowsInline;
