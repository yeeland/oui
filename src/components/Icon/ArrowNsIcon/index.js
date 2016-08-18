import React from 'react';

/* eslint-disable max-len */
const ArrowNsIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/arrow-ns-16.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ArrowNsIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = ArrowNsIcon16;
      SizeClass = 'oui-icon--16';
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

ArrowNsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ArrowNsIcon;

