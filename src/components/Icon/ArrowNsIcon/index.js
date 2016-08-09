import React from 'react';

import ArrowNsIcon16 from 'oui-icons/src/16/arrow-ns-16.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowNsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ArrowNsIcon16;
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

ArrowNsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowNsIcon;

