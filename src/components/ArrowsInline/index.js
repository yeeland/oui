import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const ArrowsInline = (props) => {
  let classes = classNames({
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
    [`oui-arrow-inline--${props.direction}`]: props.direction,
  });

  return (
    <span
      data-oui-component={ true }
      className={ classes }
      aria-hidden="true"
      data-test-section={ props.testSection }>
    </span>
  );
};

ArrowsInline.propTypes = {
  /** Direction the arrow points */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default ArrowsInline;
