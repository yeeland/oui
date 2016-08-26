import React from 'react';

/* eslint-disable max-len */
const BellIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/bell-16.svg');
const BellIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/bell-24.svg');
/* eslint-enable max-len */

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

