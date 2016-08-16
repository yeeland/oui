import React from 'react';

/* eslint-disable max-len */
const IconSample16 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/history-16.svg');
const IconSample24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/history-24.svg');
/* eslint-enable max-len */

/**
 * Icon example for any of our OUI icons in the library.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const IconSample = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = IconSample16;
      break;
    case 24:
      Svg = IconSample24;
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

IconSample.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default IconSample;
