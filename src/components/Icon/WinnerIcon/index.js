import React from 'react';

import WinnerIcon16 from 'oui-icons/src/16/winner-16.svg';
import WinnerIcon24 from 'oui-icons/src/24/winner-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const WinnerIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = WinnerIcon16;
      break;
    case 24:
      Svg = WinnerIcon24;
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

WinnerIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default WinnerIcon;

