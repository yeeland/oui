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
  });

  return (
    <table
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </table>
  );
};

Table.propTypes = {
  /** Should be a `Table.THead` or `Table.TBody` */
  children: React.PropTypes.node,
  /** Available border and hover options */
  style: React.PropTypes.oneOf(['wall', 'rule', 'rule-no-bottom-border']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Table.THead = THead;
Table.TR = TR;
Table.TH = TH;
Table.TBody = TBody;
Table.TD = TD;

export default Table;
