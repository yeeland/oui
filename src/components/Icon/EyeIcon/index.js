import React from 'react';

import EyeIcon16 from 'oui-icons/src/16/eye-16.svg';
import EyeIcon24 from 'oui-icons/src/24/eye-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EyeIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = EyeIcon16;
      break;
    case 24:
      Svg = EyeIcon24;
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

EyeIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EyeIcon;

