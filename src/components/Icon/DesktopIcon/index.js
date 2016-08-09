import React from 'react';

import DesktopIcon16 from 'oui-icons/src/16/desktop-16.svg';
import DesktopIcon24 from 'oui-icons/src/24/desktop-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const DesktopIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = DesktopIcon16;
      break;
    case 24:
      Svg = DesktopIcon24;
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

DesktopIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default DesktopIcon;

