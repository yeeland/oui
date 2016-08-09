import React from 'react';

import SettingsIcon16 from 'oui-icons/src/16/settings-16.svg';
import SettingsIcon24 from 'oui-icons/src/24/settings-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const SettingsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = SettingsIcon16;
      break;
    case 24:
      Svg = SettingsIcon24;
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

SettingsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default SettingsIcon;

