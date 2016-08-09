import React from 'react';

import StarIcon16 from 'oui-icons/src/16/star-16.svg';
import StarIcon24 from 'oui-icons/src/24/star-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const StarIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = StarIcon16;
      break;
    case 24:
      Svg = StarIcon24;
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

StarIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default StarIcon;

