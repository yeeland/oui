import React from 'react';
import PropTypes from 'prop-types';

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
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });

  return (
    <div
      data-oui-component={ true }
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
  children: PropTypes.node.isRequired,
  /** Should the `BlockList` contain a border on all sides */
  hasBorder: PropTypes.bool,
  /**
   * The max height of the `BlockList`. Pixels will be assumed if no unit is
   * provided.
   */
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

BlockList.defaultProps = {
  hasBorder: true,
};

BlockList.Category = Category;
BlockList.Item = Item;

export default BlockList;
