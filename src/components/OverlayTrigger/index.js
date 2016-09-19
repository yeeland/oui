import React from 'react';
import Tether from 'tether';

/**
 * Intelligently position elements on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
class OverlayTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOverlayOpen: false };
  }

  componentDidMount() {
    let options = {
      element: this._overlayEl.firstChild,
      target: this._activatorEl.firstChild,
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
    const Overlay = React.cloneElement(this.props.overlay, {
      [this.props.overylayIsVisibleProp]: this.state.isOverlayOpen,
    });

    const Children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onClick: (event) => {
          this.setState({
            'isOverlayOpen': !this.state.isOverlayOpen,
          });

          if (child.props.onClick) {
            child.props.onClick(event);
          }
        },
      });
    });

    return (
      /* eslint-disable react/jsx-no-bind */
      <div data-test-section={ this.props.testSection }>
        <div
          style={ { display: 'inline-block' } }
          ref={ (ref) => { this._activatorEl = ref; } }>
          { Children }
        </div>
        <div ref={ (ref) => { this._overlayEl = ref; } }>
          { Overlay }
        </div>
      </div>
      /* eslint-enable */
    );
  }
}

OverlayTrigger.propTypes = {
  /** Element that the `overlay` should attach to */
  children: React.PropTypes.node.isRequired,
  /** Side of the `overlay` that should attach to the `children` */
  horizontalAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Side of `children` that should attach to the `overlay` */
  horizontalTargetAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Should the popover reposition itself when cut off the page */
  isContstrainedToViewport: React.PropTypes.bool,
  /** The element that is attached to the children */
  overlay: React.PropTypes.node.isRequired,
  /** Name of the prop in the overlay that determines if it is visible */
  overylayIsVisibleProp: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** `overlay`'s vertical position relative to the `children` */
  verticalAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  /** `children`'s vertical position relative to the `overlay` */
  verticalTargetAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
};

OverlayTrigger.defaultProps = {
  horizontalAttachment: 'center',
  verticalAttachment: 'top',
};

export default OverlayTrigger;
