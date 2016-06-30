import React from 'react';

const inlineCode = (children, testSection) => {
  return (
    <code
      className="oui-code"
      data-test-section={ testSection }>
      { children }
    </code>
  );
};

const blockCode = (children, testSection) => {
  return (
    <pre
      className="oui-pre"
      data-test-section={ testSection }>
      <code>{ children }</code>
    </pre>
  );
};

/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Code = (props) => {
  if (props.type === 'inline') {
    return inlineCode(props.children, props.testSection);
  }

  return blockCode(props.children, props.testSection);
};

Code.propTypes = {
  /** The code within the component */
  children: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** How the code should be displayed */
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;
