import React from 'react';

const THead = (props) => {
  return (
    <thead data-test-section={ props.testSection }>
      { props.children }
    </thead>
  );
};

THead.propTypes = {
  /** Should be a `Table.TR` component */
  children: React.PropTypes.node,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

THead.displayName = 'Table.THead';

export default THead;
