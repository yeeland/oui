import React from 'react';

import ClipboardIcon16 from 'oui-icons/src/16/clipboard-16.svg';
import ClipboardIcon24 from 'oui-icons/src/24/clipboard-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ClipboardIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ClipboardIcon16;
      break;
    case 24:
      Svg = ClipboardIcon24;
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

ClipboardIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ClipboardIcon;
