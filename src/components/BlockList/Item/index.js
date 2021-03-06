import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this._handleOnKeyDown = this._handleOnKeyDown.bind(this);
  }

  _handleOnKeyDown(event) {
    if (event && event.keyCode === 32 && event.target === this._itemWithOnClick) {
      // Space key was pressed on the item, not a child of the item.
      // Run the `onClick` and prevent the page from scrolling.
      event.preventDefault();
      this.props.onClick();
    }
  }

  render() {
    let item;
    const commonClasses = 'oui-block-list__item';

    if (this.props.onClick) {
      // The element is rendered as a `div` instead of a `button` because the
      // user may want to pass in a `button` within `this.props.children`.
      // `tabIndex`, `role`, and `onKeyDown` are provided to make the `div`
      // behave like a button: https://mzl.la/1mRMvQj
      item = (
        <div
          className={ `${commonClasses} link oui-block-list__link` }
          onClick={ this.props.onClick }
          onKeyDown={ this._handleOnKeyDown }
          tabIndex="0"
          role="button"
          ref={ (el) => { this._itemWithOnClick = el; } }>
          { this.props.children }
        </div>
      );
    } else if (this.props.href) {
      item = (
        <a
          href={ this.props.href }
          className={ `${commonClasses} oui-block-list__link display--block` }
          target={ this.props.hrefTarget }
          title={ this.props.hrefTitle }
          rel={ this.props.hrefTarget === '_blank' && 'noopener noreferrer' }>
          { this.props.children }
        </a>
      );
    } else {
      item = (
        <div className={ commonClasses }>
          { this.props.children }
        </div>
      );
    }

    return (
      <li
        style={{ wordBreak: 'break-word' }}
        data-test-section={ this.props.testSection }>
        { item }
      </li>
    );
  }
}

Item.propTypes = {
  /** String or JSX that appears within the component */
  children: React.PropTypes.node.isRequired,
  /** URL to navigate to when clicking on the item */
  href: React.PropTypes.string,
  /** Target that the link, if provided, should open in */
  hrefTarget: React.PropTypes.oneOf(['_self', '_blank']),
  /** Sets the `title` attribute on an `href` */
  hrefTitle: React.PropTypes.string,
  /** Function that is run when clicking on the item */
  onClick: React.PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Item.displayName = 'BlockList.Item';

export default Item;
