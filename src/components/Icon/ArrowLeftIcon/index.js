import React from 'react';

import ArrowLeftIcon16 from 'oui-icons/src/16/arrow-left-16.svg';
import ArrowLeftIcon24 from 'oui-icons/src/24/arrow-left-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowLeftIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ArrowLeftIcon16;
      break;
    case 24:
      Svg = ArrowLeftIcon24;
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

ArrowLeftIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowLeftIcon;

