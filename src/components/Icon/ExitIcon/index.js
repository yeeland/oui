import React from 'react';

import ExitIcon16 from 'oui-icons/src/16/exit-16.svg';
import ExitIcon24 from 'oui-icons/src/24/exit-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExitIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ExitIcon16;
      break;
    case 24:
      Svg = ExitIcon24;
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

ExitIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExitIcon;

