import React from 'react';

/**
 * Simple component often used to display supplemental information to contents
 * on a page.
 *
 * See `OverlayWrapper` component to position a poptip on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Poptip = (props) => {
  return (
    <div
      className={ 'oui-pop--tip' }
      style={ { opacity: 1, position: 'static' } }
      data-test-section={ props.testSection }>
      { props.children }
    </div>
  );
};

Poptip.propTypes = {
  /** Content that appears within the poptip body */
  children: React.PropTypes.node.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Poptip;
