import React from 'react';
import Button from '../../Button';
// import CloseIcon from '../../Icon/CloseIcon';
const CloseIcon = require('oui-icons').Icon.CloseIcon;

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
const DismissButton = (props) => (
  <div
    className="push-half--left flex"
    style={{ height: '12px', width: '12px' }}>
    <Button
      onClick={ props.onClick }
      style="unstyled"
      testSection={ props.testSection && `${props.testSection}-dismiss` }>
      <CloseIcon size={ 12 } />
    </Button>
  </div>
);

DismissButton.propTypes = {
  /** Function to call that dismisses the token */
  onClick: React.PropTypes.func.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

DismissButton.displayName = 'DismissButton';

export default DismissButton;
