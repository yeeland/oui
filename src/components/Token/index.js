import React from 'react';
import Button from '../Button';

const DismissButton = (onDismiss, testSection) => {
  return (
    <Button
      onClick={ onDismiss }
      style="plain"
      size="tiny"
      ariaLabel="Close alert"
      testSection={ testSection ? testSection + '-dismiss' : null }>
      &times;
    </Button>
  );
};

/**
 * Token to be used to make token lists.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Token = (props) => {
  return (
    <div
      className="oui-token-wrap"
      data-test-section={ props.testSection }>
      <div className={ 'oui-token oui-token--' + props.style }>{ props.name }</div>
      { props.isDismissible ? DismissButton(props.onDismiss, props.testSection) : null }
    </div>
  );
};

Token.propTypes = {
  /** Determines if token has dismissible feature or not */
  isDismissible: React.PropTypes.bool,
  /** Name label on token */
  name: React.PropTypes.string.isRequired,
  /** Function to call when token has been dismissed */
  onDismiss: React.PropTypes.func,
  /** Determines style of token depending on priority level */
  style: React.PropTypes.oneOf(['primary', 'secondary']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Token.defaultProps = {
  isDismissible: false,
  style: 'secondary',
};

export default Token;
