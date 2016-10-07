import React from 'react';
import Tether from 'tether';

/**
 * Intelligently position elements on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
class OverlayWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOverlayOpen: false };
    this.onChildClick = this.onChildClick.bind(this);
  }

  componentDidMount() {
    let options = {
      element: this._overlayEl,
      target: this._activatorEl.firstChild,
      attachment: `${this.props.verticalAttachment} ${this.props.horizontalAttachment}`,
      constraints: [{
        to: 'window',
        attachment: 'together',
        pin: this.props.isConstrainedToScreen,
      }],
    };

    if (this.props.verticalTargetAttachment && this.props.horizontalTargetAttachment) {
      options.targetAttachment = `${this.props.verticalTargetAttachment} ${this.props.horizontalTargetAttachment}`;
    }

    this._tether = this.createTether(options);
    // Disable Tether after creation for performance improvements. This is okay
    // since it is hidden by default.
    this.disableTether();
  }

  enableTether() {
    this.setState({ 'isOverlayOpen': true });
    this._tether.enable();

    // Reposition once the overlay is visible because Tether can't
    // properly calculate the positioning when the overlay is not
    // displayed.
    setTimeout(() => {
      this._tether.position();
    });

    // The function must be stored so that it can be still be removed even
    // though `bind` was used: http://stackoverflow.com/a/22870717/316602
    this._bodyClickListener = this.isClickWithinOverlayOrChildren.bind(this);
    document.body.addEventListener('click', this._bodyClickListener);
  }

  disableTether() {
    this.setState({ 'isOverlayOpen': false });
    this._tether.disable();
    this.removeBodyEventListner();
  }

  removeBodyEventListner() {
    if (this._bodyClickListener) {
      document.body.removeEventListener('click', this._bodyClickListener);
    }
  }

  /**
    * Disable Tether if a user clicks outside of the `overlay` and `children`.
    * @param {Object} event - Click event
   */
  isClickWithinOverlayOrChildren(event) {
    let target = event.target;
    let shouldCloseOverlay = true;

    while (target.parentNode !== null && shouldCloseOverlay) {
      if (target === this._overlayEl || target === this._activatorEl) {
        shouldCloseOverlay = false;
      }
      target = target.parentNode;
    }

    if (shouldCloseOverlay) {
      this.disableTether();
    }
  }

  componentWillUnmount() {
    this.removeBodyEventListner();
    this._tether.destroy();
  }

  createTether(options) {
    return new Tether(options);
  }

  onChildClick(event, child) {
    // Toggle the `overlay` by enabling or disabling Tether.
    if (this.state.isOverlayOpen) {
      // Disable Tether when not visible for performance reasons.
      this.disableTether();
    } else {
      // Enable Tether when visible.
      this.enableTether();
    }

    // Run the `children`'s `onClick` if it exists.
    if (child.props.onClick) {
      child.props.onClick(event);
    }
  }

  render() {
    const Children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onClick: (event) => this.onChildClick.call(null, event, child),
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
        <div
          ref={ (ref) => { this._overlayEl = ref; } }
          style={ this.state.isOverlayOpen ? { display: 'block' } : { display: 'none' } }>
          { this.props.overlay }
        </div>
      </div>
      /* eslint-enable */
    );
  }
}

OverlayWrapper.propTypes = {
  /** Element that the `overlay` should attach to */
  children: React.PropTypes.node.isRequired,
  /** Side of the `overlay` that should attach to the `children` */
  horizontalAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Side of `children` that should attach to the `overlay` */
  horizontalTargetAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Attach `overlay` to an edge of the screen if it is going to move off */
  isConstrainedToScreen: React.PropTypes.bool.isRequired,
  /** The element that is attached to the children */
  overlay: React.PropTypes.node.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Vertical edge of the `overlay` that should touch the `children` */
  verticalAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  /** Vertical edge of the `children` that should touch the `overlay` */
  verticalTargetAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
};

OverlayWrapper.defaultProps = {
  isConstrainedToScreen: false,
  horizontalAttachment: 'center',
  verticalAttachment: 'top',
};

export default OverlayWrapper;
