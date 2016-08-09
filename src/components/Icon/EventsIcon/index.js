import React from 'react';

import EventsIcon16 from 'oui-icons/src/16/events-16.svg';
import EventsIcon24 from 'oui-icons/src/24/events-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EventsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = EventsIcon16;
      break;
    case 24:
      Svg = EventsIcon24;
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

EventsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EventsIcon;

