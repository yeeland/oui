import React from 'react';

import SaveIcon16 from 'oui-icons/src/16/save-16.svg';
import SaveIcon24 from 'oui-icons/src/24/save-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const SaveIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = SaveIcon16;
      break;
    case 24:
      Svg = SaveIcon24;
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

SaveIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default SaveIcon;

