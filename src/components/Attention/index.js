import React from 'react';
import Button from 'components/Button';
import CloseIcon from 'components/Icon/CloseIcon';
import { getAssistiveTextFromColorClass } from 'utils/accessibility';

const renderDismissButton = (testSection) => {
  return (
    <div className="oui-attention__close">
      <Button
        style="plain"
        size="small"
        ariaLabel="Close alert"
        testSection={ testSection + '-dismiss' }>
        <CloseIcon size={ 16 } />
      </Button>
    </div>
  );
};

/**
 * Provide contextual feedback with a wide range of styles that can be used to
 * convey the message's importance.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Attention = (props) => {
  let colorClassName = props.type ? 'oui-attention--' + props.type : '';
  let alignmentClassName = (props.alignment === 'center') ? 'oui-text--center' : '';
  let attentionAriaLabel = props.type ? getAssistiveTextFromColorClass(props.type) : null;
  let classes = ('oui-attention ' + colorClassName + ' ' + alignmentClassName).trim();

  return (
    <div
      className={ classes }
      data-test-section={ props.testSection }
      aria-label={ attentionAriaLabel }
      role="alert">
      { props.isDismissible ? renderDismissButton(props.testSection) : null }
      { props.children }
    </div>
  );
};

Attention.propTypes = {
  /** How the text is aligned */
  alignment: React.PropTypes.oneOf(['left', 'center']),
  /** Text that appears within the component */
  children: React.PropTypes.string.isRequired,
  /** Button allowing users to dismiss the component */
  isDismissible: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Various color schemes */
  type: React.PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
