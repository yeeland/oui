import React from 'react';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
const Poptip = (props) => {
  const classes = classNames({
    'oui-pop--tip': true,
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });

  return (
    <div
      data-oui-component={ true }
      className={ classes }
      style={{ display: 'inline-block', opacity: 1, position: 'initial' }}
      data-test-section={ props.testSection }>
      { props.children }
    </div>
  );
};

Poptip.propTypes = {
  /** Content that appears within the popover body */
  children: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Poptip;
