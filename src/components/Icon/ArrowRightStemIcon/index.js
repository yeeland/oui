import React from 'react';

import ArrowRightStemIcon16 from 'oui-icons/src/16/arrow-right-stem-16.svg';
import ArrowRightStemIcon24 from 'oui-icons/src/24/arrow-right-stem-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowRightStemIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ArrowRightStemIcon16;
      break;
    case 24:
      Svg = ArrowRightStemIcon24;
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

ArrowRightStemIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowRightStemIcon;

