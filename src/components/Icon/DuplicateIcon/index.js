import React from 'react';

import DuplicateIcon16 from 'oui-icons/src/16/duplicate-16.svg';
import DuplicateIcon24 from 'oui-icons/src/24/duplicate-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const DuplicateIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = DuplicateIcon16;
      break;
    case 24:
      Svg = DuplicateIcon24;
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

DuplicateIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default DuplicateIcon;

