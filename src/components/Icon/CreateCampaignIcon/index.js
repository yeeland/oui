import React from 'react';

import CreateCampaignIcon24 from 'oui-icons/src/24/create-campaign-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CreateCampaignIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = CreateCampaignIcon24;
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

CreateCampaignIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CreateCampaignIcon;

