import React from 'react';

import AlignCenterIcon16 from 'oui-icons/src/16/align-center-16.svg';
import AlignCenterIcon24 from 'oui-icons/src/24/align-center-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignCenterIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AlignCenterIcon16;
      break;
    case 24:
      Svg = AlignCenterIcon24;
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

AlignCenterIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignCenterIcon;

