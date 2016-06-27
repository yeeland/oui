import React from 'react';

const Label = (props) => {
  let classes = null;
  if (typeof props.children === 'string') {
    classes = 'oui-label';
  }

  return (
    <label
      className={ classes }
      data-test-section={ props.testSection }>
      { props.children }
    </label>
  );
};

Label.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.array.isRequired,
  ]),
  testSection: React.PropTypes.string,
};

export default Label;
