import React from 'react';
import classNames from 'classnames';

/**
 * Tiny inline component used to draw attention to an item's state or status.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Badge = (props) => {
  let classes = classNames({
    'oui-badge': true,
    [`oui-badge--${props.color}`]: props.color,
  });

  return (
    <span
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </span>
  );
};

Badge.propTypes = {
  /** Text that appears within the component */
  children: React.PropTypes.node.isRequired,
  /** Various color schemes */
  color: React.PropTypes.oneOf(['default', 'draft', 'live', 'primary', 'plain']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Badge.defaultProps = {
  color: 'default',
};

export default Badge;
