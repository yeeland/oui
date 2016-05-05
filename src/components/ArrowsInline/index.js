import React from 'react';

const ArrowsInline = (props) => {
  return (
    <span className={ 'oui-arrow-inline--' + props.direction } aria-hidden="true"></span>
  );
};

ArrowsInline.propTypes = {
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  children: (props, propName, componentName) => {
    if (props[propName]) {
      return new Error('ArrowsInline does not accept children.');
    }
  },
};

export default ArrowsInline;
