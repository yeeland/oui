import React from 'react';

import InconclusiveIcon16 from 'oui-icons/src/16/inconclusive-16.svg';
import InconclusiveIcon24 from 'oui-icons/src/24/inconclusive-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const InconclusiveIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = InconclusiveIcon16;
      break;
    case 24:
      Svg = InconclusiveIcon24;
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

InconclusiveIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default InconclusiveIcon;

