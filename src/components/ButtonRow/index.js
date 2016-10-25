import React from 'react';
import classNames from 'classnames';

const areAnyButtonsFullWidth = (buttons) => {
  let includesFullWidth = false;

  buttons.map((button) => {
    if (button.props && button.props.width === 'full') {
      includesFullWidth = true;
    }
  });

  return includesFullWidth;
};

const ButtonRowSide = (side, buttons, testSection) => {
  const includesFullWidthButton = areAnyButtonsFullWidth(buttons);
  const wrapperClassNames = classNames({
    'flex': includesFullWidthButton,
    'flex--1': true,
    [`oui-button-row--${side}`]: side,
  });

  return (
    <div
      className={ wrapperClassNames }
      data-test-section={ testSection ? testSection + '-' + side : null }>
      { buttons.map((button, index) => {
        if (includesFullWidthButton) {
          // `ButtonRow` groups that contain a full width `Button` must wrap
          // the buttons in `div`'s of equal spacing.
          const containerClasses = classNames({
            'push-half--right': index !== (buttons.length - 1),
            'push-half--left': index !== 0,
            'flex--1': true,
          });

          return (
            <div
              className={ containerClasses }
              key={ index }>
              { button }
            </div>
          );
        }
        return button;
      }) }
    </div>
  );
};

/**
 * A horizontal list of buttons with space between them.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ButtonRow = (props) => {
  return (
    <div
      className='oui-button-row flex'
      data-test-section={ props.testSection }>
      { props.leftGroup ? ButtonRowSide('left', props.leftGroup, props.testSection) : null }
      { props.centerGroup ? ButtonRowSide('center', props.centerGroup, props.testSection) : null }
      { props.rightGroup ? ButtonRowSide('right', props.rightGroup, props.testSection) : null }
    </div>
  );
};

ButtonRow.propTypes = {
  /** Array of buttons for the center */
  centerGroup: React.PropTypes.arrayOf(React.PropTypes.element),
  /** Array of buttons for left side */
  leftGroup: React.PropTypes.arrayOf(React.PropTypes.element),
  /** Array of buttons for right side */
  rightGroup: React.PropTypes.arrayOf(React.PropTypes.element),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ButtonRow;
