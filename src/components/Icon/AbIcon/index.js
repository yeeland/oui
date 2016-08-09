import React from 'react';

import AbIcon16 from 'oui-icons/src/16/ab-16.svg';
import AbIcon24 from 'oui-icons/src/24/ab-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AbIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AbIcon16;
      break;
    case 24:
      Svg = AbIcon24;
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

AbIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AbIcon;

