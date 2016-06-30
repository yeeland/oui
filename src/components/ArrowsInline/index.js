import React from 'react';

/**
 * Small arrows as needed next to navigational elements. The arrows will
 * inherit the color of the parent's color.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowsInline = (props) => {
  return (
    <span
      className={ 'oui-arrow-inline--' + props.direction }
      aria-hidden="true"
      data-test-section={ props.testSection }>
    </span>
  );
};

ArrowsInline.propTypes = {
  /** Direction the arrow points */
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowsInline;
