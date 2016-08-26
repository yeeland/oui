import React from 'react';

/* eslint-disable max-len */
const HelpIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/help-16.svg');
const HelpIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/help-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const HelpIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = HelpIcon16;
      break;
    case 24:
      Svg = HelpIcon24;
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

HelpIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default HelpIcon;

