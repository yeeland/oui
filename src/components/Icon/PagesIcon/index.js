import React from 'react';

/* eslint-disable max-len */
const PagesIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/pages-16.svg');
const PagesIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/pages-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PagesIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = PagesIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = PagesIcon24;
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

PagesIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default PagesIcon;

