import React from 'react';

/* eslint-disable max-len */
const DesktopIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/desktop-16.svg');
const DesktopIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/desktop-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const DesktopIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = DesktopIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = DesktopIcon24;
      SizeClass = 'oui-icon--24';
      break;
    default:
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + SizeClass }
      data-test-section={ props.testSection }
    />
  );
};

DesktopIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default DesktopIcon;

