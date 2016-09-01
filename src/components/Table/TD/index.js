import React from 'react';
import classNames from 'classnames';

const TD = (props) => {
  let classes = classNames({
    'oui-numerical': props.isNumerical,
    [`vertical-align--${ props.verticalAlign }`]: props.verticalAlign,
  });

  const styles = {
    width: props.width,
  };

  return (
    <td
      className={ classes }
      data-test-section={ props.testSection }
      style={ styles }
      colSpan={ props.colSpan }>
      { props.children }
    </td>
  );
};

TD.propTypes = {
  /** Content within the `Table.TD` component */
  children: React.PropTypes.node,
  /** Number of columns that the cell should span */
  colSpan: React.PropTypes.number,
  /** Right-align the cell if the contents are numerical */
  isNumerical: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Apply a class that vertically aligns the cells within the children */
  verticalAlign: React.PropTypes.oneOf(['middle']),
  /** A number with a unit that becomes the width of the `Table` cell */
  width: React.PropTypes.string,
};

TD.defaultProps = {
  isNumerical: false,
};

TD.displayName = 'Table.TD';

export default TD;
