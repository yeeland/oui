import React from 'react';

/* eslint-disable max-len */
const UploadIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/upload-16.svg');
const UploadIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/upload-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const UploadIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = UploadIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = UploadIcon24;
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

UploadIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default UploadIcon;

