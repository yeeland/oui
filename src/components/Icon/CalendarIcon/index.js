import React from 'react';

import CalendarIcon16 from 'oui-icons/src/16/calendar-16.svg';
import CalendarIcon24 from 'oui-icons/src/24/calendar-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CalendarIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = CalendarIcon16;
      break;
    case 24:
      Svg = CalendarIcon24;
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

CalendarIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CalendarIcon;

