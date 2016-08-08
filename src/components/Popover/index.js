import React from 'react';
import Tether from 'tether';

const PopoverTitle = (title) => {
  return (
    <div className="oui-pop--over__title">{ title }</div>
  );
};

const oppositeAttachment = (attachment) => {
  if (attachment === 'left') {
    return 'right';
  } else if (attachment === 'right') {
    return 'left';
  }

  return 'center';
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
      targetAttachment: `${this.props.verticalAttachment} ${oppositeAttachment(this.props.horizontalAttachment)}`,
    };

    if (this.props.isContstrainedToViewport) {
      options.constraints = [{
        to: 'window',
        attachment: 'together',
      }];
    }

    this._tether = new Tether(options);
  };

  componentWillUnmount() {
    this._tether.destroy();
  };

  render() {
    return (
      <div>
        { this.props.targetElement }
        <div
          className={ 'oui-pop--over' }
          ref={ (el) => this._el = el }
          style={ this.props.isVisible ? { display: 'block', opacity: 1 } : null }
          data-test-section={ this.props.testSection }>
          <div className="oui-pop--over__content">
            { this.props.title ? PopoverTitle(this.props.title) : null }
            { this.props.children }
          </div>
        </div>
      </div>
    );
  };
};

Popover.propTypes = {
  /** Content that appears within the popover body */
  children: React.PropTypes.node.isRequired,
  /** Side of the popover that should attach to the `targetElement` */
  horizontalAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
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
};

Popover.defaultProps = {
  // TODO: Make center alignments work.
  horizontalAttachment: 'center',
  verticalAttachment: 'middle',
};

export default Popover;
