import React from 'react';

import TabletIcon16 from 'oui-icons/src/16/tablet-16.svg';
import TabletIcon24 from 'oui-icons/src/24/tablet-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const TabletIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = TabletIcon16;
      break;
    case 24:
      Svg = TabletIcon24;
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

TabletIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default TabletIcon;

