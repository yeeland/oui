import React from 'react';

import SearchIcon16 from 'oui-icons/src/16/search-16.svg';
import SearchIcon24 from 'oui-icons/src/24/search-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const SearchIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = SearchIcon16;
      break;
    case 24:
      Svg = SearchIcon24;
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

SearchIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default SearchIcon;

