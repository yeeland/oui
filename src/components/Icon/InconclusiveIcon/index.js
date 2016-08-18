import React from 'react';

/* eslint-disable max-len */
const InconclusiveIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/inconclusive-16.svg');
const InconclusiveIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/inconclusive-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const InconclusiveIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = InconclusiveIcon16;
      break;
    case 24:
      Svg = InconclusiveIcon24;
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

InconclusiveIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default InconclusiveIcon;

