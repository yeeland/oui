import React from 'react';

const TR = (props) => {
  return (
    <tr data-test-section={ props.testSection }>
      { props.children }
    </tr>
  );
};

TR.propTypes = {
  /** Expects a `Table.TD` or `Table.TH` component */
  children: React.PropTypes.node,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

TR.displayName = 'Table.TR';

export default TR;
