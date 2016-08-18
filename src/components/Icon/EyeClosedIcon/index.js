import React from 'react';

/* eslint-disable max-len */
const EyeClosedIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/eye-closed-16.svg');
const EyeClosedIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/eye-closed-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EyeClosedIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = EyeClosedIcon16;
      break;
    case 24:
      Svg = EyeClosedIcon24;
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

EyeClosedIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EyeClosedIcon;

