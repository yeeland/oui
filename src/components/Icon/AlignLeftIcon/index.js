import React from 'react';

/* eslint-disable max-len */
const AlignLeftIcon16 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/align-left-16.svg');
const AlignLeftIcon24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/align-left-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignLeftIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AlignLeftIcon16;
      break;
    case 24:
      Svg = AlignLeftIcon24;
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

AlignLeftIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignLeftIcon;

