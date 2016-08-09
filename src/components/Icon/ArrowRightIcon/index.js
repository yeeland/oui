import React from 'react';

import ArrowRightIcon16 from 'oui-icons/src/16/arrow-right-16.svg';
import ArrowRightIcon24 from 'oui-icons/src/24/arrow-right-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowRightIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ArrowRightIcon16;
      break;
    case 24:
      Svg = ArrowRightIcon24;
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

ArrowRightIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowRightIcon;

