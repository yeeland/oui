import React from 'react';

/* eslint-disable max-len */
const ArrowLeftIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/arrow-left-16.svg');
const ArrowLeftIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/arrow-left-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowLeftIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 16:
      Svg = ArrowLeftIcon16;
      sizeclass = 'oui-icon--16';
      break;
    case 24:
      Svg = ArrowLeftIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
      Svg = ArrowLeftIcon16;
      sizeclass = `oui-icon--${ props.size }`;
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

ArrowLeftIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([12, 16, 24]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowLeftIcon;
