import React from 'react';

import TrashIcon16 from 'oui-icons/src/16/trash-16.svg';
import TrashIcon24 from 'oui-icons/src/24/trash-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const TrashIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = TrashIcon16;
      break;
    case 24:
      Svg = TrashIcon24;
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

TrashIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default TrashIcon;

