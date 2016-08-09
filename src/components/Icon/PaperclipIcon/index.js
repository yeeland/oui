import React from 'react';

import PaperclipIcon16 from 'oui-icons/src/16/paperclip-16.svg';
import PaperclipIcon24 from 'oui-icons/src/24/paperclip-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PaperclipIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = PaperclipIcon16;
      break;
    case 24:
      Svg = PaperclipIcon24;
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

PaperclipIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default PaperclipIcon;

