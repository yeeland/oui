import React from 'react';
import classNames from 'classnames';

import THead from './THead';
import TR from './TR';
import TH from './TH';
import TBody from './TBody';
import TD from './TD';

/**
 * Simple component to wrap `Table.THead` and `Table.TBody` components.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
let Table = (props) => {
  let classes = classNames({
    'oui-table': true,
    [`oui-table--${props.style}`]: props.style,
    [`oui-table--${props.density}`]: props.density,
  });

  const style = {
    tableLayout: props.tableLayoutAlgorithm,
  };

  return (
    <table
      className={ classes }
      style={ style }
      data-test-section={ props.testSection }>
      { props.children }
    </table>
  );
};

Table.propTypes = {
  /** Should be a `Table.THead` or `Table.TBody` */
  children: React.PropTypes.node,
  /** Sets the padding within cells */
  density: React.PropTypes.oneOf(['tight', 'loose']),
  /** Available border and hover options */
  style: React.PropTypes.oneOf(['wall', 'rule', 'rule-no-bottom-border']),
  /**
    Adjust the [CSS `table-layout` property](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
    that is used to calculate the with of inner table cells.
  */
  tableLayoutAlgorithm: React.PropTypes.oneOf(['auto', 'fixed']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Table.defaultProps = {
  density: 'tight',
  tableLayoutAlgorithm: 'fixed',
};

Table.THead = THead;
Table.TR = TR;
Table.TH = TH;
Table.TBody = TBody;
Table.TD = TD;

export default Table;
