import React from 'react';

/* eslint-disable max-len */
const ToolbarSizeMobileIcon24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/toolbar-size-mobile-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarSizeMobileIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 24:
      Svg = ToolbarSizeMobileIcon24;
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

ToolbarSizeMobileIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarSizeMobileIcon;

