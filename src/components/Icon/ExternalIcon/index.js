import React from 'react';

/* eslint-disable max-len */
const ExternalIcon16 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/external-16.svg');
const ExternalIcon24 = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/external-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExternalIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = ExternalIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = ExternalIcon24;
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

ExternalIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExternalIcon;

