import React from 'react';
import classNames from 'classnames';
import Tether from 'tether';

const PopoverTitle = (title) => {
  return (
    <div className="oui-pop--over__title">{ title }</div>
  );
};

/**
 * Display information attached to a target element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Popover = React.createClass({
  componentDidMount() {
    new Tether({
      element: '.oui-pop--over',
      target: this.props.targetElement,
      attachment: 'middle left',
      constraints: [
        {
          to: 'window',
          attachment: 'together',
        }
      ],
    });
  },

  render() {
    const classes = classNames({
      'oui-pop--over': true,
      [`oui-pop--over--arrow-${this.props.arrowDirection}`]: this.props.arrowDirection,
    });

    return (
      <div
        className={ classes }
        style={ this.props.isVisible ? { display: 'block', opacity: 1 } : null }
        data-test-section={ this.props.testSection }>
        <div className="oui-pop--over__content">
          { this.props.title ? PopoverTitle(this.props.title) : null }
          { this.props.children }
        </div>
      </div>
    );
  },

  propTypes: {
    /**
      The first direction represnts the side the arrow appears on. The second
      represents the position within that side.
    */
    arrowDirection: React.PropTypes.oneOf(['top-left', 'top-center', 'top-right', 'right-top', 'right-center', 'right-bottom', 'bottom-right', 'bottom-center', 'bottom-left', 'left-bottom', 'left-center', 'left-top']),
    /** Content that appears within the popover body */
    children: React.PropTypes.node.isRequired,
    /** Should the popover be visible on the page */
    isVisible: React.PropTypes.bool,
    /** Selector for the element that the popover should attach to */
    targetElement: React.PropTypes.string.isRequired,
    /** Hook for automated JavaScript tests */
    testSection: React.PropTypes.string,
    /** Text describing the popover contents */
    title: React.PropTypes.string,
  },
});

export default Popover;
