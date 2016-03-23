import React from 'react';

const maxCharacters = 1000;

export default class Attention extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  renderDismissButton() {
    return (
      <span className="attention__close">
        &times;
      </span>
    )
  }

  render() {
    let isDismissable = this.props.isDismissable;
    let colorClassName = this.props.type ? 'attention--' + this.props.type : '';
    let alignmentClassName = this.props.alignment === 'center' ? 'text--center' : '';

    return (
      <div>
        <div className={'attention ' +  colorClassName + ' ' + alignmentClassName }>
          { isDismissable ? this.renderDismissButton() : null }
          { this.props.children }
        </div>
      </div>
    );
  }
};

Attention.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'center']),
  children: (props, propName, componentName) => {
    if (props[propName].length === 0) {
      return new Error('Attention text is required.');
    } else if (props[propName].length > maxCharacters) {
      return new Error('Attention text must be under ' + maxCharacters + ' characters.');
    }
  },
  isDismissable: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};
