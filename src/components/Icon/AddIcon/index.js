import React from 'react';

import AddIcon16 from 'oui-icons/src/16/add-16.svg';
import AddIcon24 from 'oui-icons/src/24/add-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AddIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AddIcon16;
      break;
    case 24:
      Svg = AddIcon24;
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

AddIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AddIcon;

