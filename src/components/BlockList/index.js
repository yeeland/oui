import React from 'react';

import Category from './Category';
import Item from './Item';

import classNames from 'classnames';

/**
 * Building blocks to display a list of items that perform actions.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const BlockList = (props) => {
  const classes = classNames({
    'background--white': true,
    'overflow-x--auto': true,
    'border--all': props.hasBorder,
  });

  return (
    <div
      className={ classes }
      data-test-section={ props.testSection }
      style={{ maxHeight: props.maxHeight }}>
      <ul style={{ display: 'inline-block', minWidth: '100%' }}>
        { props.children }
      </ul>
    </div>
  );
};

BlockList.propTypes = {
  /** Should be subcomponents of `BlockList` */
  children: React.PropTypes.node.isRequired,
  /** Should the `BlockList` contain a border on all sides */
  hasBorder: React.PropTypes.bool,
  /**
   * The max height of the `BlockList`. Pixels will be assumed if no unit is
   * provided.
   */
  maxHeight: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

BlockList.defaultProps = {
  hasBorder: true,
};

BlockList.Category = Category;
BlockList.Item = Item;

export default BlockList;
