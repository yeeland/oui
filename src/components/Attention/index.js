import React from 'react';
import Button from '../Button';
import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

const renderDismissButton = (testSection) => {
  return (
    <div className="oui-attention__close">
      <Button
        style="plain"
        size="small"
        ariaLabel="Close alert"
        testSection={ testSection + '-dismiss' }>
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
      data-test-section={ props.testSection }
      aria-label={ attentionAriaLabel }
      role="alert">
      { props.isDismissible ? renderDismissButton(props.testSection) : null }
      { props.children }
    </div>
  );
};

Attention.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'center']),
  children: React.PropTypes.string.isRequired,
  isDismissible: React.PropTypes.bool,
  testSection: React.PropTypes.string,
  type: React.PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
