import React from 'react';

let renderDismissButton = () => {
  return (
    <span className="attention__close" data-test-section="attention-dismiss">
      &times;
    </span>
  );
};

const Attention = ({ alignment, children, isDismissable, type }) => {
  let colorClassName = type ? 'attention--' + type : '';
  let alignmentClassName = alignment === 'center' ? 'text--center' : '';

  return (
    <div className={'attention ' + colorClassName + ' ' + alignmentClassName }>
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
