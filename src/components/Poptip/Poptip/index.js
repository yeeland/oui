import React from 'react';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
const Poptip = (props) => (
  <div
    className={ 'oui-pop--tip' }
    style={{ display: 'inline-block', opacity: 1, position: 'initial' }}
    data-test-section={ props.testSection }>
    { props.children }
  </div>
);

Poptip.propTypes = {
  /** Content that appears within the popover body */
  children: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Poptip;
