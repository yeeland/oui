import React from 'react';
import classNames from 'classnames';

const TD = (props) => {
  let classes = classNames({
    'oui-numerical': props.isNumerical,
  });

  const styles = {
    width: props.width,
  };

  return (
    <td
      className={ classes }
      data-test-section={ props.testSection }
      style={ styles }>
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
  /** A number with a unit that becomes the width of the `Table` cell */
  width: React.PropTypes.string,
};

TD.defaultProps = {
  isNumerical: false,
};

TD.displayName = 'Table.TD';

export default TD;
