import React from 'react';

import BanIcon16 from 'oui-icons/src/16/ban-16.svg';
import BanIcon24 from 'oui-icons/src/24/ban-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const BanIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = BanIcon16;
      break;
    case 24:
      Svg = BanIcon24;
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

BanIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default BanIcon;

