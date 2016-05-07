import React from 'react';

const inlineCode = (children, testSection) => {
  return (
    <code
      className="oui-code"
      data-test-section={testSection}>
      { children }
    </code>
  );
};

const blockCode = (children, testSection) => {
  return (
    <pre
      className="oui-pre"
      data-test-section={testSection}>
      <code>{ children }</code>
    </pre>
  );
};

const Code = (props) => {
  if (props.type === 'inline') {
    return inlineCode(props.children, props.testSection);
  }

  return blockCode(props.children, props.testSection);
};

Code.propTypes = {
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
  children: React.PropTypes.string.isRequired,
  testSection: React.PropTypes.string,
};

export default Code;
