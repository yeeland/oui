import React from 'react';

/* eslint-disable max-len */
const TagsIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/tags-16.svg');
const TagsIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/tags-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const TagsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = TagsIcon16;
      break;
    case 24:
      Svg = TagsIcon24;
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

TagsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default TagsIcon;

