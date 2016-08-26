import React from 'react';
import classNames from 'classnames';

const TH = (props) => {
  let classes = classNames({
    'oui-numerical': props.isNumerical,
    'oui-cell-collapse': props.isCollapsed,
  });

  return (
    <th
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </th>
  );
};

TH.propTypes = {
  /** Content within the `Table.TH` component */
  children: React.PropTypes.node,
  /** Take up the least amount of width possible */
  isCollapsed: React.PropTypes.bool,
  /** Right-align the cell if the contents are numerical */
  isNumerical: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

TH.defaultProps = {
  isCollapsed: false,
  isNumerical: false,
};

TH.displayName = 'Table.TH';

export default TH;
