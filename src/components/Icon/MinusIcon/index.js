import React from 'react';

/* eslint-disable max-len */
const MinusIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/minus-16.svg');
const MinusIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/minus-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const MinusIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 16:
      Svg = MinusIcon16;
      sizeclass = 'oui-icon--16';
      break;
    case 24:
      Svg = MinusIcon24;
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

MinusIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default MinusIcon;

