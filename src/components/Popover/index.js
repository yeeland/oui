import React from 'react';

/**
 * Display information attached to a target element.
 *
 * See `OverlayTrigger` component to position a popover on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Popover = (props) => {
  return (
    <div
      className={ 'oui-pop--over' }
      style={ props.isVisible ? { display: 'block', opacity: 1 } : null }
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
  /** Should the popover be visible on the page */
  isVisible: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Text describing the popover contents */
  title: React.PropTypes.string,
};

export default Popover;
