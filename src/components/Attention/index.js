import React from 'react';
import Button from '../Button';
import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

const renderDismissButton = () => {
  return (
    <div className="oui-attention__close" data-test-section="attention-dismiss-container">
      <Button style="plain" size="small" ariaLabel="Close alert">
        &times;
      </Button>
    </div>
  );
};

const Attention = (props) => {
  let colorClassName = props.type ? 'oui-attention--' + props.type : '';
  let alignmentClassName = (props.alignment === 'center') ? 'oui-text--center' : '';
  let attentionAriaLabel = props.type ? getAssistiveTextFromColorClass(props.type) : null;
  let classes = ('oui-attention ' + colorClassName + ' ' + alignmentClassName).trim();

  return (
    <div
      className={ classes }
      aria-label={ attentionAriaLabel }
      role="alert">
      { props.isDismissible ? renderDismissButton() : null }
      { props.children }
    </div>
  );
};

Attention.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'center']),
  children: React.PropTypes.string.isRequired,
  isDismissible: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
