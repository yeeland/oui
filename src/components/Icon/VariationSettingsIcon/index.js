import React from 'react';

/* eslint-disable max-len */
const VariationSettingsIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/variation-settings-16.svg');
const VariationSettingsIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/variation-settings-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const VariationSettingsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = VariationSettingsIcon16;
      break;
    case 24:
      Svg = VariationSettingsIcon24;
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

VariationSettingsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default VariationSettingsIcon;

