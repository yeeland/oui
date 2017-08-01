import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Simple component often used to display supplemental information to contents
 * on a page.
 *
 * See `OverlayWrapper` component to position a popover on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Popover = (props) => {
  let classes = classNames({
    'oui-pop--over': true,
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });

  return (
    <div
      data-oui-component={ true }
      className={ classes }
      style={{ display: 'block', opacity: 1, position: 'initial' }}
      data-test-section={ props.testSection }>
      <div className="oui-pop--over__content">
        { props.title && (
          <div className="oui-pop--over__title">{ props.title }</div>
        ) }
        { props.children }
      </div>
    </div>
  );
};

Popover.propTypes = {
  /** Content that appears within the popover body */
  children: PropTypes.node.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Text describing the popover contents */
  title: PropTypes.string,
};

export default Popover;
