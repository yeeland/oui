import React from 'react';

const ArrowsInline = ({ direction }) => {
  return (
    <span>
      <span className={'arrow-inline--' + direction }></span>
    </span>
  );
};

ArrowsInline.propTypes = {
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default ArrowsInline;
