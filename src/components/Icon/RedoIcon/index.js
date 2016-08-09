import React from 'react';

import RedoIcon16 from 'oui-icons/src/16/redo-16.svg';
import RedoIcon24 from 'oui-icons/src/24/redo-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const RedoIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = RedoIcon16;
      break;
    case 24:
      Svg = RedoIcon24;
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

RedoIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default RedoIcon;

