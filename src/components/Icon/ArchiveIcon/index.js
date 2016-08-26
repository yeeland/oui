import React from 'react';

/* eslint-disable max-len */
const ArchiveIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/archive-16.svg');
const ArchiveIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/archive-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArchiveIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ArchiveIcon16;
      break;
    case 24:
      Svg = ArchiveIcon24;
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

ArchiveIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArchiveIcon;

