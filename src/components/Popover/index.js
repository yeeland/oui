import React from 'react';

/**
 * Simple component often used to display supplemental information to contents
 * on a page.
 *
 * See `OverlayWrapper` component to position a popover on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Popover = (props) => {
  return (
    <div
      className={ 'oui-pop--over' }
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
  children: React.PropTypes.node.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Text describing the popover contents */
  title: React.PropTypes.string,
};

export default Popover;
