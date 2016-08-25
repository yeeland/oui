import React from 'react';

const TBody = (props) => {
  return (
    <tbody data-test-section={ props.testSection }>
      { props.children }
    </tbody>
  );
};

TBody.propTypes = {
  /** Should be a `Table.TR` component */
  children: React.PropTypes.node,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

TBody.displayName = 'Table.TBody';

export default TBody;
