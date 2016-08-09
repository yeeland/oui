import React from 'react';

import LoserIcon16 from 'oui-icons/src/16/loser-16.svg';
import LoserIcon24 from 'oui-icons/src/24/loser-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const LoserIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = LoserIcon16;
      break;
    case 24:
      Svg = LoserIcon24;
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

LoserIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default LoserIcon;

