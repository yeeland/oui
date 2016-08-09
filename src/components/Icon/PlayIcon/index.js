import React from 'react';

import PlayIcon16 from 'oui-icons/src/16/play-16.svg';
import PlayIcon24 from 'oui-icons/src/24/play-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PlayIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = PlayIcon16;
      break;
    case 24:
      Svg = PlayIcon24;
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

PlayIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default PlayIcon;

