import React from 'react';

import HelpIcon16 from 'oui-icons/src/16/help-16.svg';
import HelpIcon24 from 'oui-icons/src/24/help-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const HelpIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = HelpIcon16;
      break;
    case 24:
      Svg = HelpIcon24;
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

HelpIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default HelpIcon;

