import React from 'react';

import VariationSettingsIcon16 from 'oui-icons/src/16/variation-settings-16.svg';
import VariationSettingsIcon24 from 'oui-icons/src/24/variation-settings-24.svg';
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

