import React from 'react';
import Button from '../Button';
import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

let renderDismissButton = () => {
  return (
    <div className="attention__close" data-test-section="attention-dismiss-container">
      <Button style="plain" size="small" ariaLabel="Close alert">
        &times;
      </Button>
    </div>
  );
};

const Attention = ({ alignment, children, isDismissable, type }) => {
  let colorClassName = type ? 'attention--' + type : '';
  let alignmentClassName = (alignment === 'center') ? 'text--center' : '';
  let attentionAriaLabel = type ? getAssistiveTextFromColorClass(type) : null;
  let classes = ('attention ' + colorClassName + ' ' + alignmentClassName).trim();

  return (
    <div className={ classes }
         aria-label={ attentionAriaLabel }
         role="alert">
      { isDismissable ? renderDismissButton() : null }
      { children }
    </div>
  );
};

Attention.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'center']),
  children: React.PropTypes.string.isRequired,
  isDismissable: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
