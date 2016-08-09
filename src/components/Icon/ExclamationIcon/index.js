import React from 'react';

import ExclamationIcon16 from 'oui-icons/src/16/exclamation-16.svg';
import ExclamationIcon24 from 'oui-icons/src/24/exclamation-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExclamationIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ExclamationIcon16;
      break;
    case 24:
      Svg = ExclamationIcon24;
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

ExclamationIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExclamationIcon;

