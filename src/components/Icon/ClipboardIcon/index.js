import React from 'react';

/* eslint-disable max-len */
const ClipboardIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/clipboard-16.svg');
const ClipboardIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/clipboard-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ClipboardIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 16:
      Svg = ClipboardIcon16;
      sizeclass = 'oui-icon--16';
      break;
    case 24:
      Svg = ClipboardIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

ClipboardIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ClipboardIcon;

