import React from 'react';

const ButtonRowSide = (side, buttons, testSection) => {
  return (
    <div
      className={ 'flex--1 oui-button-row--' + side }
      data-test-section={ testSection ? testSection + '-' + side : null }>
      { buttons }
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
      { props.rightGroup ? ButtonRowSide('right', props.rightGroup, props.testSection) : null }
    </div>
  );
};

ButtonRow.propTypes = {
  /** Array of buttons for left side */
  leftGroup: React.PropTypes.arrayOf(React.PropTypes.element),
  /** Array of buttons for right side */
  rightGroup: React.PropTypes.arrayOf(React.PropTypes.element),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ButtonRow;
