import React from 'react';

import AlignRightIcon24 from 'oui-icons/src/24/align-right-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignRightIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = AlignRightIcon24;
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

AlignRightIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignRightIcon;

