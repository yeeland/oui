import React from 'react';

/**
 * Small arrows as needed next to navigational elements. The arrows will inherit the color of the parent `color` value.
 */
const ArrowsInline = (props) => {
  return (
    <span
      className={'oui-arrow-inline--' + props.direction}
      aria-hidden="true"
      data-test-section={props.testSection}>
    </span>
  );
};

ArrowsInline.propTypes = {
  /** Direction the arrow points */
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /** No children allowed */
  children: (props, propName, componentName) => {
    if (props[propName]) {
      return new Error('ArrowsInline does not accept children.');
    }
  },
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowsInline;
