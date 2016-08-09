import React from 'react';

import RedirectIcon16 from 'oui-icons/src/16/redirect-16.svg';
import RedirectIcon24 from 'oui-icons/src/24/redirect-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const RedirectIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = RedirectIcon16;
      break;
    case 24:
      Svg = RedirectIcon24;
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

RedirectIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default RedirectIcon;

