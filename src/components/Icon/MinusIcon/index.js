import React from 'react';

import MinusIcon16 from 'oui-icons/src/16/minus-16.svg';
import MinusIcon24 from 'oui-icons/src/24/minus-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const MinusIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = MinusIcon16;
      break;
    case 24:
      Svg = MinusIcon24;
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

MinusIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default MinusIcon;

