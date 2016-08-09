import React from 'react';

import IntegrationsIcon16 from 'oui-icons/src/16/integrations-16.svg';
import IntegrationsIcon24 from 'oui-icons/src/24/integrations-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const IntegrationsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = IntegrationsIcon16;
      break;
    case 24:
      Svg = IntegrationsIcon24;
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

IntegrationsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default IntegrationsIcon;

