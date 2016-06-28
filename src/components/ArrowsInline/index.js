import React from 'react';

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
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  testSection: React.PropTypes.string,
};

export default ArrowsInline;
