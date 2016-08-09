import React from 'react';

import ToolbarInteractiveModeIcon24 from 'oui-icons/src/24/toolbar-interactive-mode-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarInteractiveModeIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = ToolbarInteractiveModeIcon24;
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

ToolbarInteractiveModeIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarInteractiveModeIcon;

