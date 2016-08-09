import React from 'react';

import DimensionsIcon16 from 'oui-icons/src/16/dimensions-16.svg';
import DimensionsIcon24 from 'oui-icons/src/24/dimensions-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const DimensionsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = DimensionsIcon16;
      break;
    case 24:
      Svg = DimensionsIcon24;
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

DimensionsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default DimensionsIcon;

