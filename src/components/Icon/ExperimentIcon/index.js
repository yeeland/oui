import React from 'react';

import ExperimentIcon16 from 'oui-icons/src/16/experiment-16.svg';
import ExperimentIcon24 from 'oui-icons/src/24/experiment-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExperimentIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ExperimentIcon16;
      break;
    case 24:
      Svg = ExperimentIcon24;
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

ExperimentIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExperimentIcon;

