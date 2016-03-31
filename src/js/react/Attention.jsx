import React from 'react';

const maxCharacters = 1000;

let renderDismissButton = () => {
  return (
    <span className="attention__close">
      &times;
    </span>
  )
};

let validateChildrenProp = (props, propName, componentName) => {
  if (!props[propName]) {
    return new Error('Attention text is required.');
  } else if (props[propName].length > maxCharacters) {
    return new Error('Attention text must be under ' + maxCharacters + ' characters.');
  }
};

const Attention = ({ alignment, children, isDismissable, type }) => {
  let colorClassName = type ? 'attention--' + type : '';
  let alignmentClassName = alignment === 'center' ? 'text--center' : '';

  return (
    <div>
      <div className={'attention ' +  colorClassName + ' ' + alignmentClassName }>
        { isDismissable ? renderDismissButton() : null }
        { children }
      </div>
    </div>
  );
};

Attention.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'center']),
  children: validateChildrenProp,
  isDismissable: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
