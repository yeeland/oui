import React from 'react';
import classNames from 'classnames';

const TR = (props) => {
  let classes = classNames({
    'oui-table-row--active': props.isActive,
    'no-border': props.noBorder,
  });
  return (
    <tr
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </tr>
  );
};

TR.propTypes = {
  /** Expects a `Table.TD` or `Table.TH` component */
  children: React.PropTypes.node,
  /** If true, add active class */
  isActive: React.PropTypes.bool,
  /** If true, add class to remove border */
  noBorder: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

TR.displayName = 'Table.TR';

export default TR;
