import React from 'react';
import classNames from 'classnames';

const TD = (props) => {
  let classes = classNames({
    'oui-numerical': props.isNumerical,
  });

  return (
    <td
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </td>
  );
};

TD.propTypes = {
  /** Content within the `Table.TD` component */
  children: React.PropTypes.node,
  /** Right-align the cell if the contents are numerical */
  isNumerical: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

TD.defaultProps = {
  isNumerical: false,
};

TD.displayName = 'Table.TD';

export default TD;
