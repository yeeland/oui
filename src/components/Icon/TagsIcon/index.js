import React from 'react';

import TagsIcon16 from 'oui-icons/src/16/tags-16.svg';
import TagsIcon24 from 'oui-icons/src/24/tags-24.svg';
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

