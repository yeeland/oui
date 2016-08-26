import React from 'react';

/* eslint-disable max-len */
const SyncIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/sync-16.svg');
const SyncIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/sync-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const SyncIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = SyncIcon16;
      break;
    case 24:
      Svg = SyncIcon24;
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

SyncIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default SyncIcon;

