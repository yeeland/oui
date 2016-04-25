import React from 'react';

let inlineCode = (children) => {
  return (
    <code className="code">
      { children }
    </code>
  );
};

let blockCode = (children) => {
  return (
    <pre className="pre"><code>{ children }</code></pre>
  );
};

const Code = ({ children, type }) => {
  if (type === 'inline') {
    return inlineCode(children);
  }

  return blockCode(children);
};

Code.propTypes = {
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
  children: React.PropTypes.string.isRequired,
};

export default Code;
