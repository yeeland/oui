import React from 'react';

const ComponentRowItem = (props) => {
  let classes = '';

  if (props.isInline) {
    classes = 'push--right display--inline';
  }
  return (
    <div className={ classes }>
      { props.children }
    </div>
  );
};

ComponentRowItem.propTypes = {
  children: React.PropTypes.element,
  isInline: React.PropTypes.bool,
};

export default ComponentRowItem;
