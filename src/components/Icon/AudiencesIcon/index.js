import React from 'react';

import AudiencesIcon16 from 'oui-icons/src/16/audiences-16.svg';
import AudiencesIcon24 from 'oui-icons/src/24/audiences-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AudiencesIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AudiencesIcon16;
      break;
    case 24:
      Svg = AudiencesIcon24;
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

AudiencesIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AudiencesIcon;

