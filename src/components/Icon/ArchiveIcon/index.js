import React from 'react';

import ArchiveIcon16 from 'oui-icons/src/16/archive-16.svg';
import ArchiveIcon24 from 'oui-icons/src/24/archive-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArchiveIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ArchiveIcon16;
      break;
    case 24:
      Svg = ArchiveIcon24;
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

ArchiveIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArchiveIcon;

