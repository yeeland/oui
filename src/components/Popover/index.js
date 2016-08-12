import React from 'react';
import Tether from 'tether';

const PopoverTitle = (title) => {
  if (!title) {
    return null;
  }

  return (
    <div className="oui-pop--over__title">{ title }</div>
  );
};

/**
 * Display information attached to a target element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
class Popover extends React.Component {
  componentDidMount() {
    let options = {
      element: this._el,
      target: this._el.previousSibling,
      attachment: `${this.props.verticalAttachment} ${this.props.horizontalAttachment}`,
    };

    if (this.props.isContstrainedToViewport) {
      options.constraints = [{
        to: 'window',
        attachment: 'together',
      }];
    }

    if (this.props.verticalTargetAttachment && this.props.horizontalTargetAttachment) {
      options.targetAttachment = `${this.props.verticalTargetAttachment} ${this.props.horizontalTargetAttachment}`;
    }

    this._tether = new Tether(options);
  }

  componentWillUnmount() {
    this._tether.destroy();
  }

  render() {
    return (
      /* eslint-disable react/jsx-no-bind */
      <div>
        { this.props.targetElement }
        <div
          className={ 'oui-pop--over' }
          ref={ (el) => { this._el = el; } }
          style={ this.props.isVisible ? { display: 'block', opacity: 1 } : null }
          data-test-section={ this.props.testSection }>
          <div className="oui-pop--over__content">
            { PopoverTitle(this.props.title) }
            { this.props.children }
          </div>
        </div>
      </div>
      /* eslint-enable react/jsx-no-bind */
    );
  }
}

Popover.propTypes = {
  /** Content that appears within the popover body */
  children: React.PropTypes.node.isRequired,
  /** Side of the popover that should attach to the `targetElement` */
  horizontalAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Side of `targetElement` that should attach to the popover */
  horizontalTargetAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Should the popover reposition itself when cut off the page */
  isContstrainedToViewport: React.PropTypes.bool,
  /** Should the popover be visible on the page */
  isVisible: React.PropTypes.bool,
  /** Element that the popover should attach to */
  targetElement: React.PropTypes.node,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Text describing the popover contents */
  title: React.PropTypes.string,
  /** Popover's vertical position relative to the `targetElement` */
  verticalAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  /** `targetElement`'s vertical position relative to the popover */
  verticalTargetAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
};

Popover.defaultProps = {
  horizontalAttachment: 'center',
  verticalAttachment: 'top',
};

export default Popover;
