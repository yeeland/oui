import React from 'react';

/* eslint-disable max-len */
const CreateCampaignIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/create-campaign-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CreateCampaignIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 24:
      Svg = CreateCampaignIcon24;
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

CreateCampaignIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CreateCampaignIcon;

