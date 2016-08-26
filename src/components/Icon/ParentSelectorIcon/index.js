import React from 'react';

/* eslint-disable max-len */
const ParentSelectorIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/parent-selector-16.svg');
const ParentSelectorIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/parent-selector-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ParentSelectorIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ParentSelectorIcon16;
      break;
    case 24:
      Svg = ParentSelectorIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

ParentSelectorIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ParentSelectorIcon;

