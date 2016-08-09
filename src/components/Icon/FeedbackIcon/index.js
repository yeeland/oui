import React from 'react';

import FeedbackIcon16 from 'oui-icons/src/16/feedback-16.svg';
import FeedbackIcon24 from 'oui-icons/src/24/feedback-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const FeedbackIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = FeedbackIcon16;
      break;
    case 24:
      Svg = FeedbackIcon24;
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

FeedbackIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default FeedbackIcon;

