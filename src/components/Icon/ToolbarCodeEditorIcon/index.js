import React from 'react';

import ToolbarCodeEditorIcon24 from 'oui-icons/src/24/toolbar-code-editor-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarCodeEditorIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = ToolbarCodeEditorIcon24;
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

ToolbarCodeEditorIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarCodeEditorIcon;

