import React from 'react';

/* eslint-disable max-len */
const IntegrationsIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/integrations-16.svg');
const IntegrationsIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/integrations-24.svg');
/* eslint-enable max-len */

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

