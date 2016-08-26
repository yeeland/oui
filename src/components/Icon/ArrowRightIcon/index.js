import React from 'react';

/* eslint-disable max-len */
const ArrowRightIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/arrow-right-16.svg');
const ArrowRightIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/arrow-right-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowRightIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = ArrowRightIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = ArrowRightIcon24;
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

ArrowRightIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowRightIcon;

