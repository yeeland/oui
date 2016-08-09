import React from 'react';

import BellIcon16 from 'oui-icons/src/16/bell-16.svg';
import BellIcon24 from 'oui-icons/src/24/bell-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const BellIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = BellIcon16;
      break;
    case 24:
      Svg = BellIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

BellIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default BellIcon;

