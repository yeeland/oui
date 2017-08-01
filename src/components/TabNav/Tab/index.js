import React from 'react';
import classNames from 'classnames';

/**
 * Individual tab component. Only meant to be used within the
 * TabNav wrapper component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Tab = (props) => {
  const classes = classNames({
    'oui-tabs-nav__item': true,
    'oui-tab-disabled': props.isDisabled,
    'is-active': props.isActive,
  });

  return (
    <li
      data-test-section={ props.testSection }
      className={ classes }
      onClick={ props.onClick }>
      { props.children }
    </li>
  );
};

Tab.propTypes = {
  /** Text or element that appears within the component */
  children: React.PropTypes.node,
  /** Should the `TabNav.Tab` visually appear to be active */
  isActive: React.PropTypes.bool,
  /** Boolean for whether the tab should be given the disabled class */
  isDisabled: React.PropTypes.bool,
  /** Function to perform when tab is clicked */
  onClick: React.PropTypes.func.isRequired,
  /** String to identify tab, used in conjunction with activeTab */
  tabId: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Tab.displayName = 'TabNav.Tab';

export default Tab;
