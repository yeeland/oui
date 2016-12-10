import React from 'react';

import Category from './Category';
import Item from './Item';

/**
 * Building blocks to display a list of items that perform actions.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const BlockList = (props) => (
  <div
    className="background--white overflow-x--auto border--all"
    data-test-section={ props.testSection }>
    <ul style={ { display: 'inline-block', minWidth: '100%' } }>
      { props.children }
    </ul>
  </div>
);

BlockList.propTypes = {
  /** Should be subcomponents of `BlockList` */
  children: React.PropTypes.node.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

BlockList.Category = Category;
BlockList.Item = Item;

export default BlockList;
