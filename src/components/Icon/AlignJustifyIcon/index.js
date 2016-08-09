import React from 'react';

import AlignJustifyIcon16 from 'oui-icons/src/16/align-justify-16.svg';
import AlignJustifyIcon24 from 'oui-icons/src/24/align-justify-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignJustifyIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AlignJustifyIcon16;
      break;
    case 24:
      Svg = AlignJustifyIcon24;
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

AlignJustifyIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignJustifyIcon;

