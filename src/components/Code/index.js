import React from 'react';

const inlineCode = (children) => {
  return (
    <code className="code">
      { children }
    </code>
  );
};

const blockCode = (children) => {
  return (
    <pre className="pre"><code>{ children }</code></pre>
  );
};

const Code = (props) => {
  if (props.type === 'inline') {
    return inlineCode(props.children);
  }

  return blockCode(props.children);
};

Code.propTypes = {
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
  children: React.PropTypes.string.isRequired,
};

export default Code;
