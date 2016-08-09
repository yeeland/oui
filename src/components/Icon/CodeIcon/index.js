import React from 'react';

import CodeIcon16 from 'oui-icons/src/16/code-16.svg';
import CodeIcon24 from 'oui-icons/src/24/code-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CodeIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = CodeIcon16;
      break;
    case 24:
      Svg = CodeIcon24;
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

CodeIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CodeIcon;

