import React from 'react';

import MobileIcon16 from 'oui-icons/src/16/mobile-16.svg';
import MobileIcon24 from 'oui-icons/src/24/mobile-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const MobileIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = MobileIcon16;
      break;
    case 24:
      Svg = MobileIcon24;
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

MobileIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default MobileIcon;

