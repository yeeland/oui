import React from 'react';

/* eslint-disable max-len */
const HamburgerIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/hamburger-16.svg');
const HamburgerIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/hamburger-24.svg');
/* eslint-enable max-len */

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

