import React from 'react';

/* eslint-disable max-len */
const LiveVariablesIcon16 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/16/live-variables-16.svg');
const LiveVariablesIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/live-variables-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const LiveVariablesIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = LiveVariablesIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = LiveVariablesIcon24;
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

LiveVariablesIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default LiveVariablesIcon;

