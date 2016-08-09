import React from 'react';

import CollapseIcon16 from 'oui-icons/src/16/collapse-16.svg';
import CollapseIcon24 from 'oui-icons/src/24/collapse-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CollapseIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = CollapseIcon16;
      break;
    case 24:
      Svg = CollapseIcon24;
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

CollapseIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CollapseIcon;

