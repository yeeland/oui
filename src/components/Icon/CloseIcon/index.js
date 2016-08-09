import React from 'react';

import CloseIcon16 from 'oui-icons/src/16/close-16.svg';
import CloseIcon24 from 'oui-icons/src/24/close-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CloseIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = CloseIcon16;
      break;
    case 24:
      Svg = CloseIcon24;
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

CloseIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CloseIcon;

