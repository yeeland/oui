import React from 'react';

import ToolbarNewWindowCloseIcon24 from 'oui-icons/src/24/toolbar-new-window-close-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarNewWindowCloseIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = ToolbarNewWindowCloseIcon24;
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

ToolbarNewWindowCloseIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarNewWindowCloseIcon;

