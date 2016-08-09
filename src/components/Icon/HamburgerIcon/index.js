import React from 'react';

import HamburgerIcon16 from 'oui-icons/src/16/hamburger-16.svg';
import HamburgerIcon24 from 'oui-icons/src/24/hamburger-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const HamburgerIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = HamburgerIcon16;
      break;
    case 24:
      Svg = HamburgerIcon24;
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

HamburgerIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default HamburgerIcon;

