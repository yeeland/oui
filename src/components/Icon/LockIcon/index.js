import React from 'react';

import LockIcon16 from 'oui-icons/src/16/lock-16.svg';
import LockIcon24 from 'oui-icons/src/24/lock-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const LockIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = LockIcon16;
      break;
    case 24:
      Svg = LockIcon24;
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

LockIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default LockIcon;

