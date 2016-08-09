import React from 'react';

import UserlistIcon16 from 'oui-icons/src/16/userlist-16.svg';
import UserlistIcon24 from 'oui-icons/src/24/userlist-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const UserlistIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = UserlistIcon16;
      break;
    case 24:
      Svg = UserlistIcon24;
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

UserlistIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default UserlistIcon;

