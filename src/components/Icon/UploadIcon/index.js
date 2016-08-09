import React from 'react';

import UploadIcon16 from 'oui-icons/src/16/upload-16.svg';
import UploadIcon24 from 'oui-icons/src/24/upload-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const UploadIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = UploadIcon16;
      break;
    case 24:
      Svg = UploadIcon24;
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

UploadIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default UploadIcon;

