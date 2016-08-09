import React from 'react';

import UndoIcon16 from 'oui-icons/src/16/undo-16.svg';
import UndoIcon24 from 'oui-icons/src/24/undo-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const UndoIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = UndoIcon16;
      break;
    case 24:
      Svg = UndoIcon24;
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

UndoIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default UndoIcon;

